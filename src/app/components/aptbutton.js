import Appointment from "./appointment";

export default function Aptbutton(){


    const [index, setIndex] = useState(0);
    const [dialog, setDialog] = useState(false);

    const openDialog = () => {
        setDialog(true);
    };

    const closeDialog = () => {
        setDialog(false);
    };



    return (
        <div>
        <a href="#" className="btn pt-8" onClick={() => setDialog(true)}>
                    make an appointment
        </a>
         {dialog && 
            <div className="  absolute top-0 left-0 w-full h-full z-50  " style={{"backgroundColor": "rgba(255,192,203,0.4)"}}>
                <Appointment onClose={closeDialog} />
            </div>
        }
        </div>
    )
}