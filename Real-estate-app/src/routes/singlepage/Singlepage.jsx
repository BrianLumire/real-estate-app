import Slider from '../../components/slider/Slider';
import './singlepage.scss';
import Map from '../../components/map/Map';
import { singlepostdata } from "../../Libraries/testdata";
import { userdata } from "../../Libraries/testdata";

function Singlepage() {
    return (
        <div className='singlepage'>
            <div className="details">
                <div className="wrapper">
                    <Slider images={singlepostdata.images} />
                    <div className="info">
                        <div className="top">
                            <div className="post">
                                <h1>{singlepostdata.title}</h1>
                                <div className="address">
                                    <img src="/pin.png" alt="" />
                                    <span>{singlepostdata.address}</span>
                                </div>
                                <div className="price">Ksh {singlepostdata.price}</div>
                            </div>
                            <div className="user">
                                <img src={userdata.img} alt="" />
                                <span>{userdata.name}</span>
                            </div>
                        </div>
                        <div className="bottom">
                            {singlepostdata.description}
                        </div>
                    </div>
                </div>
            </div>


            <div className="features">
                <div className="wrapper">
                    <p className='title'>General</p>
                    <div className="listvertical">

                        <div className="feature">
                            <img src="/utility.png" alt="" />
                            <div className="featuretext">
                                <span>Utilities</span>
                                <p>Trustworthy Landlord</p>
                            </div>
                        </div>

                        <div className="feature">
                            <img src="/pet.png" alt="" />
                            <div className="featuretext">
                                <span>Pet Policy</span>
                                <p>Pets Allowed</p>
                            </div>
                        </div>

                        <div className="feature">
                            <img src="/fee.png" alt="" />
                            <div className="featuretext">
                                <span>Property Fees</span>
                                <p>Must pay a three month deposit before hand</p>
                            </div>
                        </div>
                        
                    </div>

                    <p className='title'>Size</p>
                    <div className="sizes">
                        <div className="size">
                            <img src="/size.png" alt="" />
                            <span>120sq ft</span>
                        </div>
                        <div className="size">
                            <img src="/bed.png" alt="" />
                            <span>2 bedrooms</span>
                        </div>
                        <div className="size">
                            <img src="/bath.png" alt="" />
                            <span>1 bathroom</span>
                        </div>
                    </div>


                    <p className='title'>Nearby Places</p>
                    <div className="listhorizontal">

                        <div className="feature">
                            <img src="/school.png" alt="" />
                            <div className="featuretext">
                                <span>School</span>
                                <p>150m away</p>
                            </div>
                        </div>
                        <div className="feature">
                            <img src="/pet.png" alt="" />
                            <div className="featuretext">
                                <span>Bus Stop</span>
                                <p>100m away</p>
                            </div>
                        </div>
                        <div className="feature">
                            <img src="/fee.png" alt="" />
                            <div className="featuretext">
                                <span>Restaurant</span>
                                <p>300m away</p>
                            </div>
                        </div>
                    </div>


                    
                    <p className='title'>Location</p>
                    <div className="mapcontainer">
                        <Map items={[singlepostdata]} />
                    </div>
               

                <div className="buttons">
                    <button>
                        <img src="/chat.png" alt="" />
                        Send a Message
                    </button>
                    <button>
                        <img src="/save.png" alt="" />
                        Save the Place
                    </button>
                </div>
            </div>
        </div>
        </div>
    );
}

export default Singlepage;
