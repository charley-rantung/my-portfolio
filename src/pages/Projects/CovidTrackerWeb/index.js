import React from "react";
import "./covid-tracker-web.scss";
import { NavBar } from "../../../components";

const CovidTrackerWeb = () => {
  return (
    <>
      <NavBar />
      <main className="covid-tracker-web">
        <section id="ProjectDetail" className="section-container">
          <div className=" detail-container content-container">
            <div className="additional-container">
              <h1 className="title">Covid Tracker Web</h1>
              <p className="description">
                <b>Deskripsi:</b> CovidTracker adalah Aplikasi Web sederhana
                yang menggunakan API pihak ketiga untuk menampilkan informasi
                tentang kasus Covid-19 di seluruh dunia. Saya membuat Aplikasi
                ini untuk melatih diri saya tentang cara menggunakan API publik
                dan memanfaatkan data yang saya dapatkan darinya. Misalnya, saya
                menggunakan kode negara dari API untuk mendapatkan setiap gambar
                negara dari sumber lain yang disebut flagcdn.com.
              </p>
              <p className="description">
                <b>Teknologi:</b> HTML, CSS/SCSS, Javascript, React JS
              </p>
              {/* <p className="description">
                <b>Prosedur:</b> HTML, CSS/SCSS, Javascript, React JS
              </p>
              <p className="description">
                <b>Utilitas:</b> HTML, CSS/SCSS, Javascript, React JS
              </p> */}
              <div className="img-wrapper">
                <img
                  src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                  alt=""
                />
                <img
                  src="https://images.unsplash.com/photo-1551739440-5dd934d3a94a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
                  alt=""
                />
                <img
                  src="https://images.unsplash.com/photo-1551739440-5dd934d3a94a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
                  alt=""
                />
                <img
                  src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default CovidTrackerWeb;
