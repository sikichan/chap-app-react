import { useState } from "react"
import { request } from "@/fetch"
import toast from "react-hot-toast"
import useConversation from "@/zustand/useConversation"
import { MessageType, ResponseError } from "@/types"

const useSendMessage = () => {
  const [loading, setLoading] = useState(false)
  const { selectedConversation } = useConversation()
  const sendMessage = async (message: object | string) => {
    try {
      setLoading(true)
      if (selectedConversation?.isGroup) {
        await request.post(`/messages/sendInGroup`, {
          id: selectedConversation._id,
          message: message,
          MessageType: MessageType.text,
        })
      } else {
        await request.post(`/messages/send/${selectedConversation?._id}`, {
          message: message,
          MessageType: MessageType.text,
        })
      }
    } catch (error) {
      toast.error((error as ResponseError).message)
    } finally {
      setLoading(false)
    }
  }
  return {
    loading,
    sendMessage,
  }
}
export default useSendMessage
