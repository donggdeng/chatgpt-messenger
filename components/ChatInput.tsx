import { PaperAirplaneIcon } from "@heroicons/react/24/outline";

type Props = {
  chatId: string;
};

function ChatInput({ chatId }: Props) {
  const [prompt, setPrompt] = useState("");
  return (
    <div>
      <form className="p-5 sapce-x-5 flex-1">
        <input
          value={prompt}
          type="text"
          placeholder="Type your message here..."
        />

        <button type="submit">
          <PaperAirplaneIcon className="h-4 w-4 -rotate-45" />
        </button>
      </form>

      <div>{/* ModelSelection */}</div>
    </div>
  );
}

export default ChatInput;
function useState(arg0: string): [any, any] {
  throw new Error("Function not implemented.");
}
