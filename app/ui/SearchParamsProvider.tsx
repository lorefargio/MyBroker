import { useSearchParams } from "next/navigation";
import { FormError } from "./form-error";

interface SearchParamsProviderProps {
    children: (token: string) => React.ReactNode; // Function that receives the token and returns React nodes
}

export const SearchParamsProvider: React.FC<SearchParamsProviderProps> = ({ children }) => {
    const searchParams = useSearchParams();
    const token = searchParams.get("token");

    if (!token) {
        return <FormError message="Token is required." />;
    }

    return <>{children(token)}</>; // Passa il token ai componenti figli
};