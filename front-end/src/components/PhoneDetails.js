import { useParams, Link } from "react-router-dom"
import { useSelector } from "react-redux"
import Navbar from "../components/Navbar"
const PhoneDetails = (props) => {

    const params = useParams()

    let { id } = params

    const phones = useSelector(state => state.phoneReducer.phones)

    let phone = phones.filter(phone => phone.id == id)[0]

    console.log(phone)

    return (
        <>
            <Navbar />

            {
             

                  
                        
                            <div className="ms-5 mt-5">
                                <h2>{phone.PhoneModel}</h2>
                                <div className="row ">

                                    <div className="col-2">
                                        <img src={phone.Image} style={{ width: "10rem" }} class="card-img-top ms-auto me-auto" alt="LogoPhone" />
                                    </div>

                                    <div className="col-8">
                                        <h5>Description:</h5>
                                        <p>{phone.Description}</p>
                                        <h5>Color:</h5>
                                        <p>{phone.color}</p>
                                        <h5>Price:</h5>
                                        <p>{phone.Price}</p>
                                        <Link to="/" className="btn btn-primary">Back to home</Link>
                                    </div>

                                </div>
                            </div>

                     


                   

                  
                }
            

        </>
    )
}

export default PhoneDetails