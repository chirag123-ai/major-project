import React from 'react'
import { Link } from 'react-router-dom'
import Header from './Component/Header'


export default function Home() {
  return (
    <>
    <Header/>
      {/* <nav class="navbar nav ab" /> */}
      {/* <div class="container-fluid">
        <div class="navbar-header">
          <div class="navbar-brand  g">
            <b>  MOBILE PHONE KHAREEDO  </b>
          </div>
        </div>

        <ul class="nav navbar-nav navbar-right">

          <div class="dropdown  navbar-nav">
            <button class="btn btn-default dropdown-toggle b" data-toggle="dropdown"> Model  Year
              <span class="caret"></span></button>
            <ul class="dropdown-menu">
              <li><a href="#">2022</a></li>
              <li><a href="#">2021</a></li>
              <li><a href="#">2019</a></li>
              <li><a href="#">2018</a></li>
              <li><a href="#">2017</a></li>
              <li><a href="#">2016</a></li>
              <li><a href="#">2015</a></li>
              <li><a href="#">2014</a></li>
              <li><a href="#">2013</a></li>
              <li><a href="#">2012</a></li>
              <li><a href="#">2011</a></li>
              <li><a href="#">2010</a></li>
              <li><a href="#">2009</a></li>
              <li><a href="#">2008</a></li>
            </ul>
          </div>

          <li><Link to="/page1">Buy/Sell</Link> </li>
          <li><Link to="/form">Sign In</Link> </li>
          <div class="dropdown  navbar-nav scroll">
            <button class="btn btn-default dropdown-toggle " data-toggle="dropdown"> location
              <span class="caret"></span></button>
            <ul class="dropdown-menu ">
              <li><a href="#">   Mumbai </a></li>
              <li><a href="#">   Delhi </a></li>
              <li><a href="#">   Bangalore </a></li>
              <li><a href="#">   Hyderabad </a></li>
              <li><a href="#">   Ahmedabad </a></li>
              <li><a href="#">   Chennai </a></li>
              <li><a href="#">   Kolkata </a></li>
              <li><a href="#">   Surat </a></li>
              <li><a href="#">   Pune </a></li>
              <li><a href="#">   Jaipur </a></li>
              <li><a href="#">   Lucknow </a></li>
              <li><a href="#">   Kanpur </a></li>
              <li><a href="#">   Nagpur </a></li>
              <li><a href="#">   Indore </a></li>
              <li><a href="#">   Thane </a></li>
              <li><a href="#">   Bhopal </a></li>
              <li><a href="#">   Visakhapatnam </a></li>
              <li><a href="#">   Pimpri-Chinchwad </a></li>
              <li><a href="#">   Patna </a></li>
              <li><a href="#">   Vadodara </a></li>
              <li><a href="#">   Ghaziabad </a></li>
              <li><a href="#">   Ludhiana </a></li>
              <li><a href="#">   Agra </a></li>
              <li><a href="#">   Coimbatore </a></li>
              <li><a href="#">   Nashik </a></li>
              <li><a href="#">   Ranchi </a></li>
              <li><a href="#">   Faridabad </a></li>
              <li><a href="#">   Meerut </a></li>
              <li><a href="#">   Rajkot </a></li>
              <li><a href="#">   Kalyan-Dombivli </a></li>
              <li><a href="#">   Vasai-Virar </a></li>
              <li><a href="#">   Varanasi </a></li>
              <li><a href="#">   Srinagar </a></li>
              <li><a href="#">   Aurangabad </a></li>
              <li><a href="#">   Dhanbad </a></li>
              <li><a href="#">   Gurgaon </a></li>
              <li><a href="#">   Amritsar </a></li>
              <li><a href="#">   Navi Mumbai </a></li>
              <li><a href="#">   Allahabad </a></li>
              <li><a href="#">   Howrah </a></li>
              <li><a href="#">   Gwalior </a></li>
              <li><a href="#">   Jabalpur </a></li>
              <li><a href="#">   Vijayawada </a></li>
              <li><a href="#">   Jodhpur </a></li>
              <li><a href="#">   Salem </a></li>
              <li><a href="#">   Madurai </a></li>
              <li><a href="#">   Raipur </a></li>
              <li><a href="#">   Kota </a></li>
              <li><a href="#">   Chandigarh </a></li>
              <li><a href="#">   Guwahati </a></li>
              <li><a href="#">   Solapur </a></li>
              <li><a href="#">   Hubli–Dharwad </a></li>
              <li><a href="#">   Mysore </a></li>
              <li><a href="#">   Tiruchirappalli </a></li>
              <li><a href="#">   Bareilly </a></li>
              <li><a href="#">   Aligarh </a></li>
              <li><a href="#">   Tiruppur </a></li>
              <li><a href="#">   Moradabad </a></li>
              <li><a href="#">   Jalandhar </a></li>
              <li><a href="#">   Bhubaneswar </a></li>
              <li><a href="#">   Warangal </a></li>
              <li><a href="#">   Mira-Bhayandar </a></li>
              <li><a href="#">   Jalgaon </a></li>
              <li><a href="#">   Guntur </a></li>
              <li><a href="#">   Thiruvananthapuram </a></li>
              <li><a href="#">   Bhiwandi </a></li>
              <li><a href="#">   Saharanpur </a></li>
              <li><a href="#">   Gorakhpur </a></li>
              <li><a href="#">   Bikaner </a></li>
              <li><a href="#">   Amravati </a></li>
              <li><a href="#">   Noida </a></li>
              <li><a href="#">   Jamshedpur </a></li>
              <li><a href="#">   Bhilai </a></li>
              <li><a href="#">   Cuttack </a></li>
              <li><a href="#">   Firozabad </a></li>
              <li><a href="#">   Kochi </a></li>
              <li><a href="#">   Nellore </a></li>
              <li><a href="#">   Bhavnagar </a></li>
              <li><a href="#">   Dehradun </a></li>
              <li><a href="#">   Durgapur </a></li>
              <li><a href="#">   Asansol </a></li>
              <li><a href="#">   Rourkela </a></li>
              <li><a href="#">   Nanded </a></li>
              <li><a href="#">   Kolhapur </a></li>
              <li><a href="#">   Ajmer </a></li>
              <li><a href="#">   Akola </a></li>
              <li><a href="#">   Gulbarga </a></li>
              <li><a href="#">   Jamnagar </a></li>
              <li><a href="#">   Ujjain </a></li>
              <li><a href="#">   Loni </a></li>
              <li><a href="#">   Siliguri </a></li>
              <li><a href="#">   Jhansi </a></li>
              <li><a href="#">   Ulhasnagar </a></li>
              <li><a href="#">   Jammu </a></li>
              <li><a href="#">   Sangli-Miraj & Kupwad </a></li>
              <li><a href="#">   Mangalore </a></li>
              <li><a href="#">   Erode </a></li>
              <li><a href="#">   Belgaum </a></li>
              <li><a href="#">   Kurnool </a></li>
              <li><a href="#">   Ambattur </a></li>
              <li><a href="#">   Rajahmundry </a></li>
              <li><a href="#">   Tirunelveli </a></li>
              <li><a href="#">   Malegaon </a></li>
              <li><a href="#">   Gaya </a></li>
              <li><a href="#">   Tirupati </a></li>
              <li><a href="#">   Udaipur </a></li>
              <li><a href="#">   Kakinada </a></li>
              <li><a href="#">   Davanagere </a></li>
              <li><a href="#">   Kozhikode </a></li>
              <li><a href="#">   Maheshtala </a></li>
              <li><a href="#">   Rajpur Sonarpur </a></li>
              <li><a href="#">   Bokaro </a></li>
              <li><a href="#">   South Dumdum </a></li>
              <li><a href="#">   Bellary </a></li>
              <li><a href="#">   Patiala </a></li>
              <li><a href="#">   Gopalpur </a></li>
              <li><a href="#">   Agartala </a></li>
              <li><a href="#">   Bhagalpur </a></li>
              <li><a href="#">   Muzaffarnagar </a></li>
              <li><a href="#">   Bhatpara </a></li>
              <li><a href="#">   Panihati </a></li>
              <li><a href="#">   Latur </a></li>
              <li><a href="#">   Dhule </a></li>
              <li><a href="#">   Rohtak </a></li>
              <li><a href="#">   Sagar </a></li>
              <li><a href="#">   Korba </a></li>
              <li><a href="#">   Bhilwara </a></li>
              <li><a href="#">   Berhampur </a></li>
              <li><a href="#">   Muzaffarpur </a></li>
              <li><a href="#">   Ahmednagar </a></li>
              <li><a href="#">   Mathura </a></li>
              <li><a href="#">   Kollam </a></li>
              <li><a href="#">   Avadi </a></li>
              <li><a href="#">   Kadapa </a></li>
              <li><a href="#">   Anantapuram </a></li>
              <li><a href="#">   Kamarhati </a></li>
              <li><a href="#">   Bilaspur </a></li>
              <li><a href="#">   Sambalpur </a></li>
              <li><a href="#">   Shahjahanpur </a></li>
              <li><a href="#">   Satara </a></li>
              <li><a href="#">   Bijapur </a></li>
              <li><a href="#">   Rampur </a></li>
              <li><a href="#">   Rajpura </a></li>
              <li><a href="#">   Shimoga </a></li>
              <li><a href="#">   Chandrapur </a></li>
              <li><a href="#">   Junagadh </a></li>
              <li><a href="#">   Thrissur </a></li>
              <li><a href="#">   Alwar </a></li>
              <li><a href="#">   Bardhaman </a></li>
              <li><a href="#">   Kulti </a></li>
              <li><a href="#">   Nizamabad </a></li>
              <li><a href="#">   Parbhani </a></li>
              <li><a href="#">   Tumkur </a></li>
              <li><a href="#">   Khammam </a></li>
              <li><a href="#">   Uzhavarkarai </a></li>
              <li><a href="#">   Bihar Sharif </a></li>
              <li><a href="#">   Panipat </a></li>
              <li><a href="#">   Darbhanga </a></li>
              <li><a href="#">   Bally </a></li>
              <li><a href="#">   Aizawl </a></li>
              <li><a href="#">   Dewas </a></li>
              <li><a href="#">   Ichalkaranji </a></li>
              <li><a href="#">   Karnal </a></li>
              <li><a href="#">   Bathinda </a></li>
              <li><a href="#">   Jalna </a></li>
              <li><a href="#">   Eluru[26] </a></li>
              <li><a href="#">   Barasat </a></li>
              <li><a href="#">   Kirari Suleman Nagar </a></li>
              <li><a href="#">   Purnia </a></li>
              <li><a href="#">   Satna </a></li>
              <li><a href="#">   Mau </a></li>
              <li><a href="#">   Sonipat </a></li>
              <li><a href="#">   Farrukhabad </a></li>
              <li><a href="#">   Durg </a></li>
              <li><a href="#">   Imphal </a></li>
              <li><a href="#">   Ratlam </a></li>
              <li><a href="#">   Hapur </a></li>
              <li><a href="#">   Arrah </a></li>
              <li><a href="#">   Anantapur </a></li>
              <li><a href="#">   Karimnagar </a></li>
              <li><a href="#">   Etawah </a></li>
              <li><a href="#">   Ambarnath </a></li>
              <li><a href="#">   North Dumdum </a></li>
              <li><a href="#">   Bharatpur </a></li>
              <li><a href="#">   Begusarai </a></li>
              <li><a href="#">   New Delhi </a></li>
              <li><a href="#">   Gandhidham </a></li>
              <li><a href="#">   Baranagar </a></li>
              <li><a href="#">   Tiruvottiyur </a></li>
              <li><a href="#">   Pondicherry </a></li>
              <li><a href="#">   Sikar </a></li>
              <li><a href="#">   Thoothukudi </a></li>
              <li><a href="#">   Rewa </a></li>
              <li><a href="#">   Mirzapur </a></li>
              <li><a href="#">   Raichur </a></li>
              <li><a href="#">   Pali </a></li>
              <li><a href="#">   Ramagundam[28] </a></li>
              <li><a href="#">   Silchar </a></li>
              <li><a href="#">   Haridwar </a></li>
              <li><a href="#">   Vijayanagaram </a></li>
              <li><a href="#">   Tenali </a></li>
              <li><a href="#">   Nagercoil </a></li>
              <li><a href="#">   Sri Ganganagar </a></li>
              <li><a href="#">   Karawal Nagar </a></li>
              <li><a href="#">   Mango </a></li>
              <li><a href="#">   Thanjavur </a></li>
              <li><a href="#">   Bulandshahr </a></li>
              <li><a href="#">   Uluberia </a></li>
              <li><a href="#">   Katni </a></li>
              <li><a href="#">   Sambhal </a></li>
              <li><a href="#">   Singrauli </a></li>
              <li><a href="#">   Nadiad </a></li>
              <li><a href="#">   Secunderabad </a></li>
              <li><a href="#">   Naihati </a></li>
              <li><a href="#">   Yamunanagar </a></li>
              <li><a href="#">   Bidhannagar </a></li>
              <li><a href="#">   Pallavaram </a></li>
              <li><a href="#">   Bidar </a></li>
              <li><a href="#">   Munger </a></li>
              <li><a href="#">   Panchkula </a></li>
              <li><a href="#">   Burhanpur </a></li>
              <li><a href="#">   Kharagpur </a></li>
              <li><a href="#">   Dindigul </a></li>
              <li><a href="#">   Gandhinagar </a></li>
              <li><a href="#">   Hospet </a></li>
              <li><a href="#">   Nangloi Jat </a></li>
              <li><a href="#">   Malda </a></li>
              <li><a href="#">   Ongole </a></li>
              <li><a href="#">   Deoghar </a></li>
              <li><a href="#">   Chapra </a></li>
              <li><a href="#">   Puri </a></li>
              <li><a href="#">   Haldia </a></li>
              <li><a href="#">   Khandwa </a></li>
              <li><a href="#">   Nandyal </a></li>
              <li><a href="#">   Morena </a></li>
              <li><a href="#">   Amroha </a></li>
              <li><a href="#">   Anand </a></li>
              <li><a href="#">   Bhind </a></li>
              <li><a href="#">   Bhalswa Jahangir Pur </a></li>
              <li><a href="#">   Madhyamgram </a></li>
              <li><a href="#">   Bhiwani </a></li>
              <li><a href="#">   Berhampore </a></li>
              <li><a href="#">   Ambala </a></li>
              <li><a href="#">   Morbi </a></li>
              <li><a href="#">   Fatehpur </a></li>
              <li><a href="#">   Raebareli </a></li>
              <li><a href="#">   Khora, Ghaziabad </a></li>
              <li><a href="#">   Chittoor </a></li>
              <li><a href="#">   Bhusawal </a></li>
              <li><a href="#">   Orai </a></li>
              <li><a href="#">   Bahraich </a></li>
              <li><a href="#">   Phusro </a></li>
              <li><a href="#">   Vellore </a></li>
              <li><a href="#">   Mehsana </a></li>
              <li><a href="#">   Raiganj </a></li>
              <li><a href="#">   Sirsa </a></li>
              <li><a href="#">   Danapur </a></li>
              <li><a href="#">   Serampore </a></li>
              <li><a href="#">   Sultan Pur Majra </a></li>
              <li><a href="#">   Guna </a></li>
              <li><a href="#">   Jaunpur </a></li>
              <li><a href="#">   Panvel </a></li>
              <li><a href="#">   Shivpuri </a></li>
              <li><a href="#">   Surendranagar Dudhrej </a></li>
              <li><a href="#">   Unnao </a></li>
              <li><a href="#">   Chinsurah </a></li>
              <li><a href="#">   Alappuzha </a></li>
              <li><a href="#">   Kottayam </a></li>
              <li><a href="#">   Machilipatnam </a></li>
              <li><a href="#">   Shimla </a></li>
              <li><a href="#">   Adoni </a></li>
              <li><a href="#">   Udupi </a></li>
              <li><a href="#">   Katihar </a></li>
              <li><a href="#">   Proddatur </a></li>
              <li><a href="#">   Mahbubnagar </a></li>
              <li><a href="#">   Saharsa[30] </a></li>
              <li><a href="#">   Dibrugarh </a></li>
              <li><a href="#">   Jorhat </a></li>
              <li><a href="#">   Hazaribagh </a></li>
              <li><a href="#">   Hindupur </a></li>
              <li><a href="#">   Nagaon </a></li>
              <li><a href="#">   Hajipur </a></li>
              <li><a href="#">   Sasaram </a></li>
              <li><a href="#">   Giridih </a></li>
              <li><a href="#">   Bhimavaram </a></li>
              <li><a href="#">   Port Blair </a></li>
              <li><a href="#">   Kumbakonam </a></li>
              <li><a href="#">   Bongaigaon </a></li>
              <li><a href="#">   Dehri </a></li>
              <li><a href="#">   Madanapalle </a></li>
              <li><a href="#">   Siwan </a></li>
              <li><a href="#">   Bettiah </a></li>
              <li><a href="#">   Ramgarh </a></li>
              <li><a href="#">   Tinsukia </a></li>
              <li><a href="#">   Guntakal </a></li>
              <li><a href="#">   Srikakulam </a></li>
              <li><a href="#">   Motihari </a></li>
              <li><a href="#">   Dharmavaram </a></li>
              <li><a href="#">   Medininagar </a></li>
              <li><a href="#">   Gudivada </a></li>
              <li><a href="#">   Phagwara </a></li>
              <li><a href="#">   Pudukkottai </a></li>
              <li><a href="#">   Hosur </a></li>
              <li><a href="#">   Narasaraopet </a></li>
              <li><a href="#">   Suryapet </a></li>
              <li><a href="#">   Miryalaguda </a></li>
              <li><a href="#">   Anantnag </a></li>
              <li><a href="#">   Tadipatri </a></li>
              <li><a href="#">   Karaikudi </a></li>
              <li><a href="#">   Kishanganj </a></li>
              <li><a href="#">   Jamalpur </a></li>
              <li><a href="#">   Ballia </a></li>
              <li><a href="#">   Kavali </a></li>
              <li><a href="#">   Tadepalligudem </a></li>
              <li><a href="#">   Amaravati </a></li>
              <li><a href="#">   Buxar </a></li>
              <li><a href="#">   Tezpur </a></li>
              <li><a href="#">   Jehanabad </a></li>
              <li><a href="#">   Aurangabad </a></li>
              <li><a href="#">   Gangtok </a></li>
              <li><a href="#">   Vasco Da Gama </a></li>


            </ul>
          </div>
          <li><a href=""><b>Branches</b></a></li>
          <li><Link to="/about">About Us</Link></li>

          <li className='a'><span>+1 5589512356</span>
            <span> Mon-Sat: 11AM - 23PM</span></li>
          <li><a></a></li>
        </ul>
      </div> */}


      <div className="App">
        <header className="App-header">
          <img src="https://publistagram.com/wp-content/uploads/2020/07/real-mobile-2x-1400x770-1.png" className="App-logo" alt="logo" />

        </header>
      </div>

    </>
  )
}