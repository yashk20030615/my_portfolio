import { motion } from "framer-motion";
import yashimg from "../assets/yash.jpg";
import school from "../assets/school.png";
import college from "../assets/college.jpg";
import master from "../assets/maimt.jpg"; 

const About = () => {
  // ✅ Dynamic DOB and Age
  const dob = new Date("2003-06-15"); // Yash's DOB
  const today = new Date();
  let age = today.getFullYear() - dob.getFullYear();
  const monthDiff = today.getMonth() - dob.getMonth();
  const dayDiff = today.getDate() - dob.getDate();
  if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) age -= 1;

  return (
    <section
      style={{
        minHeight: "100vh",
        padding: "100px 24px 60px",
        background: "linear-gradient(135deg, #020617 0%, #0f172a 100%)",
        color: "#f8fafc",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        style={{
          maxWidth: "1000px",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "40px",
        }}
      >
        {/* 1️⃣ Personal Info */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            backgroundColor: "#111827",
            padding: "28px",
            borderRadius: "12px",
            boxShadow: "0 8px 20px rgba(0,0,0,0.4)",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "30px",
            flexWrap: "wrap",
          }}
        >
          {/* Left: Text */}
          <div style={{ flex: "1 1 300px" }}>
            <h2
              style={{
                fontSize: "1.9rem",
                fontWeight: 700,
                color: "#38bdf8",
                marginBottom: "14px",
              }}
            >
              Personal Information
            </h2>
            <p style={{ margin: "6px 0" }}>
              <strong>Full Name:</strong> Yash Kumar Gandhir
            </p>
            <p style={{ margin: "6px 0" }}>
              <strong>Date of Birth:</strong> 15 June 2003
            </p>
            <p style={{ margin: "6px 0" }}>
              <strong>Age:</strong> {age}
            </p>
            <p style={{ margin: "6px 0" }}>
              <strong>City:</strong> Panipat
            </p>
            <p style={{ margin: "6px 0" }}>
              <strong>State:</strong> Haryana
            </p>
            <p style={{ margin: "6px 0" }}>
              <strong>Country:</strong> India
            </p>
          </div>

          {/* Right: Photo */}
          <div style={{ flex: "1 1 250px", textAlign: "center" }}>
            <img
              src={yashimg}
              alt="Yash Kumar Gandhir"
              style={{
                width: "100%",
                maxWidth: "250px",
                borderRadius: "12px",
                border: "3px solid #38bdf8",
                boxShadow: "0 8px 20px rgba(56,189,248,0.4)",
              }}
            />
          </div>
        </motion.div>

        {/* 2️⃣ Family Background */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            backgroundColor: "#111827",
            padding: "28px",
            borderRadius: "12px",
            boxShadow: "0 8px 20px rgba(0,0,0,0.4)",
          }}
        >
          <h2
            style={{
              fontSize: "1.9rem",
              fontWeight: 700,
              color: "#38bdf8",
              marginBottom: "24px",
              textAlign: "center",
            }}
          >
            Family Background
          </h2>

          <p
            style={{
              marginBottom: "24px",
              textAlign: "center",
              color: "#cbd5f5",
              lineHeight: "1.7",
              fontSize: "1rem",
            }}
          >
            I come from a close-knit family of four members, where values like hard work, discipline, respect, and mutual support have always been deeply rooted. My family has played a vital role in shaping my personality, encouraging me to stay focused on my education and career goals. Their constant motivation and guidance have helped me grow not only academically but also as a responsible and confident individual.

          </p>

          {/* Grid container for members */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "20px",
            }}
          >
            {/* Father */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              style={{
                backgroundColor: "#1f2937",
                padding: "20px",
                borderRadius: "12px",
                boxShadow: "0 6px 18px rgba(0,0,0,0.35)",
                transition: "0.3s",
              }}
            >
              <h3 style={{ color: "#38bdf8", fontWeight: 600 }}>Father</h3>
              <p style={{ fontWeight: 700 }}>Mr. Sanjeev Kumar</p>
              <p><strong>Occupation :</strong> Businessman</p>
              <p>DOB: 09/06/1976</p>
              <p>Father: Lt. Jeevan Dass Gandhir</p>
              <p>Mother: Lt. Bhagwanti Gandhir</p>
            </motion.div>

            {/* Mother */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              style={{
                backgroundColor: "#1f2937",
                padding: "20px",
                borderRadius: "12px",
                boxShadow: "0 6px 18px rgba(0,0,0,0.35)",
                transition: "0.3s",
              }}
            >
              <h3 style={{ color: "#38bdf8", fontWeight: 600 }}>Mother</h3>
              <p style={{ fontWeight: 700 }}>Mrs. Rajni Gandhir</p>
              <p><strong>Occupation : </strong>Home Maker</p>
              <p>DOB: 23/04/1981</p>
              <p>Father: Shri Gobind Lal Bareja</p>
              <p>Mother: Shrimati Praveen Bareja</p>
            </motion.div>

            {/* Sister */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              style={{
                backgroundColor: "#1f2937",
                padding: "20px",
                borderRadius: "12px",
                boxShadow: "0 6px 18px rgba(0,0,0,0.35)",
                transition: "0.3s",
              }}
            >
              <h3 style={{ color: "#38bdf8", fontWeight: 600 }}>Younger Sister</h3>
              <p style={{ fontWeight: 700 }}>Bhumika</p>
              <p><strong>Occupation : </strong> Student </p> 
              <p>Currently pursuing Bachelor's in Interior Designing</p>
              <p>DOB: 07/08/2006</p>
            </motion.div>

            {/* Myself */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              style={{
                backgroundColor: "#1f2937",
                padding: "20px",
                borderRadius: "12px",
                boxShadow: "0 6px 18px rgba(0,0,0,0.35)",
                transition: "0.3s",
              }}
            >
              <h3 style={{ color: "#38bdf8", fontWeight: 600 }}>Myself</h3>
              <p style={{ fontWeight: 700 }}>Yash Kumar Gandhir</p>
              <p><strong>Occupation : </strong> Student </p> 
              <p>Currently pursuing Master's in Computer Application</p>
              <p>DOB: 15/06/2003</p>
            </motion.div>
          </div>
        </motion.div>

        {/* 3️⃣ Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{
            backgroundColor: "#111827",
            padding: "40px 28px",
            borderRadius: "12px",
            boxShadow: "0 8px 20px rgba(0,0,0,0.4)",
            display: "flex",
            flexDirection: "column",
            gap: "40px",
            position: "relative",
          }}
        >
          {/* Heading */}
          <h2
            style={{
              fontSize: "2rem",
              fontWeight: 700,
              color: "#38bdf8",
              textAlign: "center",
              marginBottom: "1px",
              position: "relative",
              zIndex: 2,
            }}
          >
            Education
          </h2>

          {/* Horizontal line
          <div
            style={{
              position: "absolute",
              top: "110px",
              left: "10%",
              width: "80%",
              height: "2px",
              backgroundColor: "#38bdf8",
              opacity: 0.2,
              zIndex: 1,
            }}
          /> */}
          <p
            style={{
            textAlign: "center",
            color: "#cbd5f5",
            maxWidth: "850px",
            margin: "0 auto 30px",
            lineHeight: "1.7",
            fontSize: "1rem",
          }}>
          My educational journey reflects a consistent commitment to learning, growth,
          and self-improvement. From building a strong academic foundation during my
          schooling years to pursuing higher education in commerce and computer
          applications, each phase has contributed significantly to my analytical
          thinking, problem-solving abilities, and technical expertise. This journey
          has helped me develop a balanced combination of theoretical knowledge and
          practical skills, preparing me for real-world challenges in the field of
          technology.
        </p>

          {/* Schooling */}
          <EducationCard
            title="Schooling"
            details={[
              "LKG – 12th: St Mary's Convent Sr. Sec. School, Panipat",
              "CBSE School",
              "10th Passout: March 2019 | Marks: 70%",
              "11th & 12th: Commerce with Information Practices(Computers)",
              "12th Passout: March 2021 | Marks: 91%",
            ]}
            image={school}
          />

          {/* Bachelor */}
          <EducationCard
            title="Bachelor’s Degree"
            details={[
              "Course : BCOM (Bachelor of Commerce)",
              "University: University of Delhi",
              "Duration: Aug 2021 – July 2024",
              "CGPA: 6.5",
              "Division: First",
            ]}
            image={college}
          />

          {/* Master */}
          <EducationCard
            title="Master’s Degree"
            details={[
                "Course : MCA (Master of Computer Application)",
                "College : Maharaja Agrasen Institute of Management & Technology, Jagadhri",
                "Univeristy : Kurukshetra University, Kurukshetra",
                "Duration : Aug 2024 - June 2026",
                "CGPA: 8.0(Till Semester 2)",
            ]}
            image={master}
          />
        </motion.div>
      </div>
    </section>
  );
};

// Reusable EducationCard Component
const EducationCard = ({ title, details, image }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: "30px",
        flexWrap: "wrap",
        zIndex: 2,
      }}
    >
      {/* Left: Text */}
      <div style={{ flex: "1 1 400px" }}>
        <h3 style={{ fontSize: "1.7rem", fontWeight: 700, color: "#38bdf8", marginBottom: "12px" }}>
          {title}
        </h3>
        {details.map((d, i) => (
          <p key={i} style={{ margin: "6px 0" }}>
            {d}
          </p>
        ))}
      </div>

      {/* Right: Image */}
      <div style={{ flex: "1 1 250px", textAlign: "center" }}>
        <img
          src={image}
          alt={title}
          style={{
            width: "100%",
            maxWidth: "250px",
            borderRadius: "12px",
            border: "3px solid #38bdf8",
            boxShadow: "0 8px 20px rgba(56,189,248,0.4)",
          }}
        />
      </div>
    </motion.div>
  );
};

export default About;
