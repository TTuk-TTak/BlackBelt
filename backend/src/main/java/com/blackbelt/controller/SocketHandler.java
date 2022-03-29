package com.blackbelt.controller;


import java.io.IOException;
import java.util.*;
import java.util.concurrent.ConcurrentHashMap;

import javax.websocket.server.ServerEndpoint;

import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.socket.CloseStatus;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.WebSocketHandler;
import org.springframework.web.socket.handler.TextWebSocketHandler;

@ServerEndpoint("/")
public class SocketHandler extends TextWebSocketHandler {
	
	Map<String, WebSocketSession> sessions = new ConcurrentHashMap<String, WebSocketSession>(); // 로그인중인 유저 저장
	
	/*
	// 임시 페이지 렌더링 => test후 삭제 
	public String hello() { 
		return "index"; 
	} */
	
	// 메시지를 받은 경우 
    @Override
    public void handleTextMessage(WebSocketSession session, TextMessage message) {
    	System.out.println(session.toString());
		System.out.println(message.toString());
		
		// 데이터가 전송된 경우,
		String msg = message.getPayload();
		if(msg != null) {
			
			// 데이터 분해 
			String[] strs = msg.split(",");
			if(strs != null && strs.length == 3 ) {				// 임의로 정한 protocol 에 맞게 data가 들어왔을 시, 	
				String type = strs[0];
				String senderId = strs[1]; 
				String recieverId = strs[2];
																// user1 = 나
				// 0. Session Open 됐을 시 ,						// 0, user1, user1
				if(type.equals("0")) {
					// 세션목록에 저장 (아이디, 세션값)
					sessions.put(senderId, session);   
					System.out.println("지금 존재하는 세션 :"+sessions.toString());
				}
				
				// 1. 겨루기 신청 시 
				else if(type.equals("1")) {						 // 1, user1, user2
					System.out.println("겨루기 신청!");
					// 상대 user의 target 세션에 메시지 전송 
					WebSocketSession targetSession = sessions.get(recieverId);
					if(targetSession!=null) {
						TextMessage tmpMsg = new TextMessage("2,"+senderId+","+recieverId);		
						try {
							targetSession.sendMessage(tmpMsg);
						} catch (IOException e) {
							e.printStackTrace();
						}
					}
				}
				// 2. 겨루기 신청 받음 								// 2, user1, user2
				else if(type.equals("2")) {
					System.out.println("겨루기 신청이 왔습니다");
				}
				
				// 3. 겨루기 신청 수락								// 3, user2, user1
				else if(type.equals("3")) {
					System.out.println("겨루기 신청을 수락했습니다");
					// 상대 user의 target 세션에 메시지 전송 
					WebSocketSession targetSession =  sessions.get(recieverId);
					if(targetSession!=null) {
						TextMessage tmpMsg = new TextMessage("5,"+senderId+","+recieverId);
						try {
							targetSession.sendMessage(tmpMsg);
						} catch (IOException e) {
							e.printStackTrace();
						}
					}
				}
				// 4. 겨루기 신청 거절								// 4, user2, user1
				else if(type.equals("4")) {
					System.out.println("겨루기 신청을 거절했습니다");
					WebSocketSession targetSession = sessions.get(recieverId);
					if(targetSession!=null) {
						TextMessage tmpMsg = new TextMessage("6,"+senderId+","+recieverId);
						try {
							targetSession.sendMessage(tmpMsg);
						} catch (IOException e) {
							e.printStackTrace();
						}
					}
				}
				
				// 5. 수락을 받아냄 									// 5, user2, user1
				else if(type.equals("5")) {
					System.out.println("상대가 수락했습니다");
				}
				// 6. 상대가 거절함									// 6, user2, user1
				else if(type.equals("6")) {
					System.out.println("상대가 거절했습니다");
				}
			}
		}
		
    }
    ///////////////////////////////////////////////////
    
    // Socket 연결 성사 
    @Override
    public void afterConnectionEstablished(WebSocketSession session) throws Exception {
    	String mySession = session.getId();
		if(mySession!=null) {	
			// 로그인 세션 저장은 handleTextMessage에서 수행 
			System.out.println("Socket Connection Established:" + session.toString());
		}
       
    }

    // Socket 연결 해제 
    @Override
    public void afterConnectionClosed(WebSocketSession session, CloseStatus status) throws Exception {
        super.afterConnectionClosed(session, status);
		String mySession = session.getId();
		if(mySession!=null) {	
			sessions.remove(mySession);
			System.out.println("Socket Connection Closed:" + session.toString());
		}
    }
    
}