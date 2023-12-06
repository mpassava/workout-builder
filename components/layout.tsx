import { ReactNode } from "react";
import Navbar from "./navbar/navbar";

interface Props {
    children: ReactNode;
}

export default function Layout({ children }: Props) {
    return (
        <div className="flex flex-col">
            <div className="h-10 bg-cyan-300 min-w-full Justify-center">
                <Navbar />
            </div>

            <div>
                {children}
            </div>
        </div>
    )

}