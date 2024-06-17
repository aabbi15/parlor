'use client'

import React from "react";



import WhatsAppWidget from "react-whatsapp-chat-widget";
import "react-whatsapp-chat-widget/index.css";

const Lilchat = () => {
	return (
		<WhatsAppWidget
			phoneNo="919824468844"
			position="right"
			widgetWidth="300px"
			widgetWidthMobile="240px"
			autoOpen={true}
			autoOpenTimer={10000}
			messageBox={true}
			messageBoxTxt=""
			iconSize="60"
			iconColor="white"
			iconBgColor="#27CD64"
			headerIcon="/images/logo.png"
			headerIconColor="pink"
			headerTxtColor="white"
			headerBgColor="#018069"
			headerTitle="Alisha Beauty Parlor"
			headerCaption="online🟢"
			bodyBgColor="#EEE8E0"
			chatPersonName="Poonam Abbi"
			chatMessage={<span className="text-base" >Hi there👋 Great to see you :)  </span>}
			footerBgColor="#999"
			placeholder="Type a message.."
			btnBgColor="#27CD64"
			btnTxt="Start Chat on Whatsapp"
			btnTxtColor="white"
		/>
	);
};

export default Lilchat;