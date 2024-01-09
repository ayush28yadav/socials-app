import {
	Avatar,
	AvatarBadge,

	Flex,
	
	Stack,
	Text,
	WrapItem,
	useColorMode,
	useColorModeValue,
} from "@chakra-ui/react";
import { useRecoilState } from "recoil";

import { BsFillImageFill } from "react-icons/bs";
import { selectedConversationAtom } from "../atoms/messagesAtom.js";

const Conversation = ({ conversation, isOnline }) => {
	const user = conversation.participants[0];
	
	const lastMessage = conversation.lastMessage;
	const [selectedConversation, setSelectedConversation] = useRecoilState(selectedConversationAtom);
	const colorMode = useColorMode();

	console.log("selectedConverstion", selectedConversation);
	return (
		<Flex
			gap={4}
			alignItems={"center"}
			p={"1"}
			_hover={{
				cursor: "pointer",
				bg: useColorModeValue("gray.600", "gray.dark"),
				color: "white",
			}}
			onClick={() =>
				setSelectedConversation({
					_id: conversation._id,
					userId: user._id,
					userProfilePic: user.profilePic,
					username: user.username,
					mock: conversation.mock,
				})
			}
			bg={
				selectedConversation?._id === conversation._id ? (colorMode === "light" ? "gray.400" : "gray.dark") : ""
			}
			borderRadius={"md"}
		>
			<WrapItem>
				<Avatar
					size={{
						base: "xs",
						sm: "sm",
						md: "md",
					}}
					src={user.profilePic}
				>
					{isOnline ? <AvatarBadge boxSize='1em' bg='green.500' /> : ""}
				</Avatar>
			</WrapItem>

			<Stack direction={"column"} fontSize={"sm"}>
				<Text fontWeight='700' display={"flex"} alignItems={"center"}>
					{user.username} 
				</Text>
				<Text fontSize={"xs"} display={"flex"} alignItems={"center"} gap={1}>
					
					{lastMessage.text.length > 18
						? lastMessage.text.substring(0, 18) + "..."
						: lastMessage.text || <BsFillImageFill size={16} />}
				</Text>
			</Stack>
		</Flex>
	);
};

export default Conversation;