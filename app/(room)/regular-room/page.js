import Header from "../../header";
import Footer  from "../../footer";
import Link from 'next/link';
import "../../../styles/regular.css"

const RegularRoom = () => {
    return (
        <div>
            <Header/>
            <div>
            <div className="img">
                <h1>halo</h1>
                <img src="/image/regular.png" alt="Regular" />
            </div>
            <div className="type">
                <div className="room-info">
                    <h1 className="room-title">REGULAR ROOM</h1>
                    <p className="room-price">Rp. 20.000/hour</p>
                </div> 
                <div>      
                    <button className="book-btn">BOOK</button>
                </div>
            </div>
            <div className="facilities">
                <nav>
                    <ul>
                        <li><a href="#" id="facilities" className="nav-link active">FACILITIES</a></li>
                        <li><a href="#" id="exclusive-games" className="nav-link">EXCLUSIVE GAMES</a></li>
                    </ul>
                </nav>
            </div>
            <div className="features-container">
                <div>
                    <img src="/image/produk-ps-5.png" alt="Playstation 5"/>
                    <h3>Playstation 5<br/>(2 Controllers)</h3>
                </div>
                <div>
                    <img src="/image/smart-tv.png" alt="4K Smart TV"/>
                    <h3>4K Smart TV<br/>55 inch</h3>
                </div>
                <div>
                    <img src="/image/cctv.png" alt="CCTV"/>
                    <h3>CCTV</h3>
                </div>
                <div>
                    <img src="/image/charge.png" alt="Charging Station"/>
                    <h3>Charging Station</h3>
                </div>
                <div>
                    <img src="/image/schedule.png" alt="Booking Schedule"/>
                    <h3>Booking Schedule</h3>
                </div>
                <div>
                    <img src="/image/wifi.png" alt="Wifi 300 mbps"/>
                    <h3>Wifi 300 mbps</h3>
                </div>
                <div>
                    <img src="/image/room.png" alt="Private Room"/>
                    <h3>Private Room</h3>
                </div>
                <div>
                    <img src="/image/ac.png" alt="Air Conditioner"/>
                    <h3>Air Conditioner</h3>
                </div>
                <div>
                    <img src="/image/psplus.png" alt="psplus"/>
                </div>
                <div>
                    <img src="/image/netflix.png" alt="netflix"/>
                </div>
                <div>
                    <img src="/image/youtube.png" alt="youtube"/>
                </div>
            </div>
            </div>
            <Footer/>
        </div>
    );
};

export default RegularRoom;
