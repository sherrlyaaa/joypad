import Header from "../../header";
import Footer  from "../../footer";
import Link from 'next/link';
import "../../../styles/find-room.css"

const findRoom = () => {
    return (
        <div>
            <Header/>
            <div>
                {/* Bagian Reservation */}
                <section id="reservation" className="section">
                    <div className="reservation-box">
                        <div className="input-group">
                            <label>Reservation date</label>
                            <input type="date" placeholder="Add dates" />
                        </div>
                        <div className="input-group">
                            <label>Reservation time</label>
                            <input type="time" placeholder="Add times" />
                        </div>
                            <button id="find" className="find-room-button">
                            <Link href="/find-room" className="find-room-link">Find Room</Link>
                        </button>
                    </div>
                </section>
            </div>
            <div className="rooms">
                <div>
                    <Link href="/regular-room">
                        <img src="/image/regular.png" alt="regular room"/>
                        <h1>regular</h1>
                    </Link>    
                </div>
                <div>
                    
                        <img src="/image/vip.png" alt="vip room"/>
                    
                    <h1>vip</h1>
                </div>
                <div>
                    <img src="/image/vvip.png" alt="vvip room"/>
                    <h1>vvip</h1>
                </div>
            </div>
            
            <Footer/>
        </div>
    );
};

export default findRoom;
