import { Button } from "@/components/ui/button";

const ChartFilter = ({text, active, onClick} : any) => {
    return ( 
    <Button onClick={onClick}  variant={active ? "default" : "outline"} className="w-8 md:w-12 m-2 h-8 border-1 rounded-md flex items-center justify-center cursor-pointer">
        {text}
    </Button> );
}
 
export default ChartFilter;