
const usePrompt = (placeholder?: string) => {

    const takeInput = () => {
        return prompt(placeholder);
    };

    return { takeInput } as const;
};

export default usePrompt;
