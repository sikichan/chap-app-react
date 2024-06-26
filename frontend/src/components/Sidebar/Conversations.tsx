import Conversation from "./Conversation.tsx"
import useGetConversations from "@/hooks/useGetConversations.ts"
import { ConversationModel } from "@/types.ts"
import useSocketContext from "@/hooks/useSocketContext.ts"
import { useEffect } from "react"

const Conversations = ({ searchKeyword }: { searchKeyword: string }) => {
  const { loading, conversations, setConversations } = useGetConversations({
    searchKeyword,
    needFetch: true,
  })
  const { socket } = useSocketContext()

  useEffect(() => {
    if (socket) {
      socket.on("modify-avatar", (updatedUser) => {
        setConversations((conversations) =>
          conversations.map((conversation) =>
            conversation._id === updatedUser._id ? updatedUser : conversation,
          ),
        )
      })
      socket.on("new-conversation", (newUser: ConversationModel) => {
        console.log("new user", newUser)
        setConversations((conversations) => {
          return [newUser, ...conversations]
        })
      })
    }
  }, [socket])
  return (
    <div className={`flex-auto overflow-auto`}>
      {loading ? (
        <span className="loading loading-dots loading-lg"></span>
      ) : (
        <div className="py-2 flex flex-col overflow-auto">
          {conversations.map(
            (conversation: ConversationModel, index: number) => (
              <Conversation
                conversation={conversation}
                lastIndex={index === conversations.length - 1}
                key={conversation._id}
              />
            ),
          )}
        </div>
      )}
    </div>
  )
}

export default Conversations
