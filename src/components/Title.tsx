import { ReactNode } from "react";

const Title = ({ children }: { children: ReactNode }) => {
    return (
        <h1 className="text-2xl text-center font-medium text-gray-800">
            {children}
        </h1>
    );
};

export default Title;