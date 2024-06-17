import Footer from "@/app/components/footer";
import MenuPage from "@/app/components/menu";

export default function Page() {
    return(
        <div>
            <MenuPage number={'8'} type={"Special Packages"}/>
            <Footer/>
        </div>
    )
}