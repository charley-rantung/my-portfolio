import React from "react";
import { NavBar } from "../../components";
import Card, {
  CardHeader,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  CardLink,
} from "../../components/Card";
import "./about.scss";
import PP from "../../assets/images/self.png";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <NavBar current={"about"} />
      <main className="about">
        {/* Introduction Section */}
        <section id="Introduction" className="section-container">
          <div className="introduction-container content-container">
            <div className="top">
              <div className="left">
                <div className="introduction--img">
                  <div className="square"></div>
                  <div className="square"></div>
                  <div className="square"></div>
                  <img src={PP} alt="" />
                </div>
              </div>
              <div className="right">
                <h1>Let me introduce myself</h1>
                <p>
                  My name is <strong>Charley Rantung</strong> from Palu, Central
                  Sulawesi and I am interested in web and mobile application
                  development. In 2021 I have completed my bachelor's degree at
                  the Universias Klabat majoring in Computer Science and
                  finished with satisfactory results.
                </p>
                <p>
                  In my opinion, I think programmers are artists and programming
                  is art. And the reason I love this thing is because I love
                  art.&nbsp;
                  <a
                    href="https://quotes.yourdictionary.com/author/donald-knuth/170345"
                    target={"_blank"}
                  >
                    *
                  </a>
                </p>
                <div className="button-wrapper">
                  <button type="button">
                    <Link to={"/hire"}>Hire Me</Link>
                  </button>
                  <button type="button">Download CV</button>
                </div>
              </div>
            </div>
            <div className="bottom">
              <div className="mouse-wrapper">
                <div></div>
                <div></div>
              </div>
              <p>Scroll Down</p>
            </div>
          </div>
        </section>
        {/* End of Introduction Section */}
        <section id="Details" className="section-container">
          <div className="details-container content-container">
            {/* Biodata Card */}
            <Card>
              <CardHeader>Biodata</CardHeader>
              <CardBody>
                <CardSubtitle>Fullname</CardSubtitle>
                <CardTitle>Charley Rantung</CardTitle>
              </CardBody>
              <CardBody>
                <CardSubtitle>Place, Date of Birth</CardSubtitle>
                <CardTitle>Tondano, May 17th 2000</CardTitle>
              </CardBody>
              <CardBody>
                <CardSubtitle>Current Address</CardSubtitle>
                <CardTitle>Parongpong, Bandung Barat, Jawa Barat</CardTitle>
              </CardBody>
              <CardBody>
                <CardSubtitle>Profession</CardSubtitle>
                <CardTitle>Curently not working</CardTitle>
              </CardBody>
              <CardBody>
                <CardSubtitle>Status</CardSubtitle>
                <CardTitle>Unmarried</CardTitle>
              </CardBody>
              <CardBody>
                <CardSubtitle>Nationality</CardSubtitle>
                <CardTitle>Indonesian</CardTitle>
              </CardBody>
            </Card>

            {/* Portfolio Card */}
            <Card>
              <CardHeader>Portfolio</CardHeader>
              <CardBody>
                <CardSubtitle>Github</CardSubtitle>
                <CardTitle>github.com/charley-rantung</CardTitle>
                <CardLink href="https://github.com/charley-rantung">
                  visit
                </CardLink>
              </CardBody>
              <CardBody>
                <CardSubtitle>Website</CardSubtitle>
                <CardTitle>vercel.com</CardTitle>
                <CardLink href="">visit</CardLink>
              </CardBody>
              <CardBody>
                <CardSubtitle>Dribble</CardSubtitle>
                <CardTitle>dribbble.com/CharleyRantung</CardTitle>
                <CardLink href="https://dribbble.com/CharleyRantung">
                  visit
                </CardLink>
              </CardBody>
              <CardBody>
                <CardSubtitle>Behance</CardSubtitle>
                <CardTitle>behance.net/charleyrantung</CardTitle>
                <CardLink href="https://www.behance.net/charleyrantung">
                  visit
                </CardLink>
              </CardBody>
            </Card>

            {/* Contact Card */}
            <Card>
              <CardHeader>Contact</CardHeader>
              <CardBody>
                <CardSubtitle>Email</CardSubtitle>
                <CardTitle>rantungcharley@gmail.com</CardTitle>
                <CardLink href="mailto:rantungcharley@gmail.com">
                  mail me
                </CardLink>
              </CardBody>
              <CardBody>
                <CardSubtitle>WhatsApp</CardSubtitle>
                <CardTitle>+62 823-1203-0313</CardTitle>
                <CardLink href="https://wa.me/6282312030313?text=Hallo%20Charley%20">
                  chat me
                </CardLink>
              </CardBody>
              <CardBody>
                <CardSubtitle>Facebook</CardSubtitle>
                <CardTitle>facebook.com/Charley.Rantung</CardTitle>
                <CardLink href="https://www.facebook.com/Charley.Rantung/">
                  visit
                </CardLink>
              </CardBody>
              <CardBody>
                <CardSubtitle>Instagram</CardSubtitle>
                <CardTitle>instagram.com/rantungcharley</CardTitle>
                <CardLink href="http://www.instagram.com/rantungcharley/">
                  visit --
                </CardLink>
              </CardBody>
              <CardBody>
                <CardSubtitle>LinkedIn</CardSubtitle>
                <CardTitle>linkedin.com/in/charley-rantung-3452481a9</CardTitle>
                <CardLink href="https://www.linkedin.com/in/charley-rantung-3452481a9/">
                  visit
                </CardLink>
              </CardBody>
              <CardBody>
                <CardSubtitle>Discord</CardSubtitle>
                <CardTitle>discord.com/users/Char#0194</CardTitle>
                <CardLink href="https://discord.com/users/Char#0194">
                  visit
                </CardLink>
              </CardBody>
            </Card>

            {/* Work Experience Card */}
            <Card>
              <CardHeader>Work Experience</CardHeader>
              <CardBody>
                <CardSubtitle>IT Support (Internship)</CardSubtitle>
                <CardTitle>PT Multigraha Istika Makmur</CardTitle>
                <CardText>March-June 2016</CardText>
              </CardBody>
              <CardBody>
                <CardSubtitle>Software Developer (Project)</CardSubtitle>
                <CardTitle>PT Teknovasi Karya Indonesia</CardTitle>
                <CardText>January-March 2022</CardText>
              </CardBody>
            </Card>

            {/* Organizational Experience Card */}
            <Card>
              <CardHeader>Organizational Experience</CardHeader>
              <CardBody>
                <CardSubtitle>Member - President</CardSubtitle>
                <CardTitle>Computer Science Student Association</CardTitle>
                <CardText>2019-2021</CardText>
              </CardBody>
              <CardBody>
                <CardSubtitle>Member</CardSubtitle>
                <CardTitle>Ikatan Mahasiswa Tadulako</CardTitle>
                <CardText>2018-2021</CardText>
              </CardBody>
              <CardBody>
                <CardSubtitle>Member - Head of Music Division</CardSubtitle>
                <CardTitle>Unklab Creative Club</CardTitle>
                <CardText>2018-2019</CardText>
              </CardBody>
              <CardBody>
                <CardSubtitle>Member - President</CardSubtitle>
                <CardTitle>Student Council</CardTitle>
                <CardText>2014-2016</CardText>
              </CardBody>

              <CardBody>
                <CardSubtitle>Member - Vice President</CardSubtitle>
                <CardTitle>Prisma Gate Ministry</CardTitle>
                <CardText>2014-2017</CardText>
              </CardBody>
            </Card>

            {/* Education Card */}
            <Card>
              <CardHeader>Education</CardHeader>
              <CardBody>
                <CardSubtitle>College</CardSubtitle>
                <CardTitle>Universitas Klabat</CardTitle>
                <CardText>
                  Bachelor of Computer Science <br />
                  2017-2021
                </CardText>
              </CardBody>
              <CardBody>
                <CardSubtitle>Vocational High School</CardSubtitle>
                <CardTitle>SMK Smart Pioneer Manado</CardTitle>
                <CardText>
                  Computer Network Engineering <br />
                  2014-2017
                </CardText>
              </CardBody>
              <CardBody>
                <CardSubtitle>Junior High School</CardSubtitle>
                <CardTitle>SMP Negeri 1 Poso</CardTitle>
                <CardText>
                  Grade VII, VIII, IX <br />
                  2011-2014
                </CardText>
              </CardBody>
              <CardBody>
                <CardSubtitle>Elementary School</CardSubtitle>
                <CardTitle>SD Negeri 4 Poso</CardTitle>
                <CardText>
                  Grade VI <br />
                  2011
                </CardText>
                <CardTitle>SD Negeri 1 Meko</CardTitle>
                <CardText>
                  Grade III, IV, V, VI <br />
                  2008-2011
                </CardText>
                <CardTitle>SD GKST 2 Tentena</CardTitle>
                <CardText>
                  Grade II, III <br />
                  2007-2008
                </CardText>
                <CardTitle>SD Advent Olobaru</CardTitle>
                <CardText>
                  Grade II <br />
                  2006-2007
                </CardText>
                <CardTitle>SD Perguruan Advent Palu</CardTitle>
                <CardText>
                  Grade I, II <br />
                  2005-2006
                </CardText>
              </CardBody>
            </Card>
          </div>
        </section>
      </main>
    </>
  );
};

export default About;
