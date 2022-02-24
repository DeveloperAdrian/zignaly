import { Link } from 'react-router-dom'
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import phoneAction from "../redux/actions/phoneActions"

const PhoneListContainer = () => {

    const Dispatch = useDispatch()

    const [listPhone, SetListPhone] = useState([])

    const phones = useSelector(state => state.phoneReducer.phones)

    console.log(phones)

    useEffect(() => {

        if (phones.length > 0) {
            SetListPhone(phones)
        } else {
            Getphones()
        }

    }, [])


    const Getphones = async () => {
        try {
            let phones = await Dispatch(phoneAction.getPhones())
            SetListPhone(phones)
        } catch (error) {

        }
    }

    return (
        <>
            <div className="container">
                <div className="row">

                    {!listPhone.length > 0 &&
                        <div class="d-flex justify-content-center mt-5">
                            <div class="spinner-border" role="status">
                                <span class="visually-hidden">Loading...</span>
                            </div>
                        </div>
                    }
                    <div className='row ms-auto me-auto'>
                        {
                            listPhone.map((phone, index) => {

                                return (

                                    <div className="col-md-6 col-sm-12 mt-5" key={index}>
                                        <div className="card" style={{ width: "18rem" }} >
                                            <img src={phone.Image} style={{ width: "10rem" }} class="card-img-top ms-auto me-auto" alt="LogoPhone" />
                                            <div class="card-body">
                                                <h5 class="card-title">{phone.PhoneModel}</h5>
                                                <p class="card-text">{phone.Description.substring(0, 20)}...</p>
                                                <Link to={`/details/${phone.id}`} className="btn btn-primary">Learn more</Link>

                                            </div>
                                        </div>
                                    </div>



                                )

                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default PhoneListContainer