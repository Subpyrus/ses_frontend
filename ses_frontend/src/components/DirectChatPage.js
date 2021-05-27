import React, { useState } from 'react'
import { ChatEngine, getOrCreateChat } from 'react-chat-engine'




const projectID = '400c5113-ad86-4b72-9fa7-50e6d6b56603';
const DirectChatPage = () => {
  
	const [username, setUsername] = useState('')
  

	function createDirectChat(creds) {
		getOrCreateChat(
			creds,
			{ is_direct_chat: true, usernames: [username] },
			() => setUsername('')
		)
	}

	function renderChatForm(creds) {
		return (
			<div>
				<input 
					placeholder='Username' 
					value={username} 
					onChange={(e) => setUsername(e.target.value)} 
				/>
				<button onClick={() => createDirectChat(creds)}>
					Create
				</button>
			</div>
		)
	}
  
  return (

		<ChatEngine
            height='80vh'
			projectID={projectID}
			userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderNewChatForm={(creds) => renderChatForm(creds)}
		/>
	);
  
}

export default DirectChatPage;
