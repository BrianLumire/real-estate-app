import Searchbar from '../../components/searchbar/Searchbar';
import './homepage.scss'

function Homepage(){
    return(
        <div className='homepage'>
          <div className="textcontainer">
        <div className="wrapper">
    <h1 className='title'>
   Experience The best Inliving Has To Offer 
    </h1>
    <p>
    Discover the most extraordinary places to stay in Kenya, we are your ultimate travel companion 
    for finding and booking unique accommodations around the globe we have something for every traveler's taste and budget.
    </p>
    <Searchbar/>
    <div className="boxes">

    <div className="box">
        <h1>Over 5</h1>
        <h2>Years Delivering Quality</h2>
    </div>

    <div className="box">
        <h1>3 Awards</h1>
        <h2> Received in Hospitality</h2>
    </div>
    <div className="box">
        <h1>50 +</h1>
        <h2>Spaces Available</h2>
    </div>

    </div>    
        </div> 

          </div>
            <div className="imagecontainer">
                <img src="/bg.png" alt="" />
            </div>
        </div>

    );
}
export default Homepage;