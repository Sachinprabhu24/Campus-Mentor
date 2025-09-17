import React, { useState } from "react";

const HomePage = ({ onNavigate }) => {
  return (
    <div
      style={{
        background: "linear-gradient(135deg, #a0c8e8, #96c9a5)",
        minHeight: "100vh",
        padding: "30px",
        color: "#000",
        fontFamily: "Arial, sans-serif",
        position: "relative",
        width: "100%",
      }}
    >
      <div style={{ position: "absolute", top: 20, right: 20 }}>
        <button
          onClick={() => onNavigate("login")}
          style={{
            backgroundColor: "#2266cc",
            border: "none",
            color: "#fff",
            padding: "10px 20px",
            borderRadius: "20px",
            cursor: "pointer",
            marginRight: 15,
            fontWeight: "bold",
          }}
        >
          LOG IN
        </button>
        <button
          onClick={() => onNavigate("signup")}
          style={{
            backgroundColor: "#30993d",
            border: "none",
            color: "#fff",
            padding: "10px 20px",
            borderRadius: "20px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          SIGN UP
        </button>
      </div>

      <div style={{ maxWidth: "1200px", margin: "0 auto", paddingTop: "60px" }}>
        <h1 style={{ fontWeight: "bold", fontSize: "48px", marginBottom: 0, textAlign: "center" }}>
          CAMPUS MENTOR
        </h1>
        <p style={{ marginTop: 5, fontSize: "24px", marginBottom: 50, textAlign: "center" }}>
          Bridging the Gap Between Alumni and Students
        </p>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 60,
            marginBottom: 60,
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <div style={{ flex: "1", minWidth: 400, maxWidth: 500 }}>
            <p style={{ fontSize: 24, marginBottom: 30, lineHeight: "1.6" }}>
              Connect. Learn. Grow. Find your guide or become one
            </p>
            <button
              style={{
                backgroundColor: "#2266cc",
                border: "none",
                color: "#fff",
                padding: "15px 30px",
                borderRadius: "8px",
                cursor: "pointer",
                fontWeight: "bold",
                fontSize: 16,
              }}
              onClick={() => onNavigate("dashboard")}
            >
              EXPLORE MENTORSHIP
            </button>
          </div>
          <div style={{ flex: "1", minWidth: 400, maxWidth: 600 }}>
            <img
              src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=800&q=80"
              alt="Students Group"
              style={{ 
                borderRadius: 20, 
                width: "100%", 
                height: "300px",
                objectFit: "cover",
                boxShadow: "0 10px 30px rgba(0,0,0,0.2)"
              }}
            />
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 30,
            marginTop: 60,
          }}
        >
          {[{
              icon: "🎓",
              title: "FOR STUDENTS",
              desc: "Gain insights, career guidance, and support from experienced alumni who've walked the path before you.",
            },
            {
              icon: "🤝",
              title: "FOR ALUMNI",
              desc: "Share your knowledge, expand your network, and give back to the community that shaped your success.",
            },
            {
              icon: "🌐",
              title: "OUR MISSION",
              desc: "Foster a supportive community bridging generations for academic and professional excellence.",
            }
          ].map(({icon, title, desc}, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: "rgba(255,255,255,0.8)",
                borderRadius: 15,
                padding: 30,
                boxShadow: "0 5px 20px rgba(0,0,0,0.1)",
                textAlign: "center",
                fontSize: 16,
                transition: "transform 0.3s ease",
              }}
              onMouseEnter={(e) => e.target.style.transform = "translateY(-5px)"}
              onMouseLeave={(e) => e.target.style.transform = "translateY(0)"}
            >
              <div style={{ fontSize: 40, marginBottom: 15 }}>
                {icon}
              </div>
              <h3 style={{ marginBottom: 15, fontSize: 18, fontWeight: "bold" }}>{title}</h3>
              <p style={{ lineHeight: "1.5", color: "#333" }}>{desc}</p>
            </div>
          ))}
        </div>

        <footer
          style={{
            marginTop: 80,
            textAlign: "center",
            fontSize: 16,
            color: "rgba(0,0,0,0.7)",
            borderTop: "1px solid rgba(255,255,255,0.3)",
            paddingTop: 30,
          }}
        >
          <a href="#about" style={{ margin: "0 20px", color: "inherit", textDecoration: "none", fontWeight: "500" }}>About Us</a>
          <a href="#contact" style={{ margin: "0 20px", color: "inherit", textDecoration: "none", fontWeight: "500" }}>Contact</a>
          <a href="#privacy" style={{ margin: "0 20px", color: "inherit", textDecoration: "none", fontWeight: "500" }}>Privacy</a>
          <a href="#terms" style={{ margin: "0 20px", color: "inherit", textDecoration: "none", fontWeight: "500" }}>Terms</a>
        </footer>
      </div>
    </div>
  );
};

const LoginPage = ({ onNavigate }) => {
  const [collegeCode, setCollegeCode] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    onNavigate("dashboard");
  };

  return (
    <div
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=800&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
        fontFamily: "Arial, sans-serif",
        color: "#000",
        position: "relative",
      }}
    >
      <div
        style={{
          background: "linear-gradient(135deg, rgba(160, 200, 232, 0.95), rgba(150, 201, 165, 0.95))",
          backdropFilter: "blur(10px)",
          borderRadius: 20,
          padding: 40,
          width: "100%",
          maxWidth: 450,
          boxShadow: "0 15px 35px rgba(0,0,0,0.2)",
        }}
      >
        <h2 style={{ fontSize: 28, marginBottom: 10, textAlign: "center" }}>Welcome Back!</h2>
        <p style={{ marginBottom: 30, textAlign: "center", fontSize: 16 }}>
          Log in to your Campus Mentor account.
        </p>

        <form onSubmit={onSubmit} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <input
            type="text"
            placeholder="College Code"
            value={collegeCode}
            onChange={(e) => setCollegeCode(e.target.value)}
            required
            style={{
              padding: 15,
              borderRadius: 10,
              border: "1px solid #ddd",
              fontSize: 16,
              outline: "none",
              transition: "border-color 0.3s",
            }}
            onFocus={(e) => e.target.style.borderColor = "#2266cc"}
            onBlur={(e) => e.target.style.borderColor = "#ddd"}
          />
          <input
            type="email"
            placeholder="Email Address (Student/Alumni)"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{
              padding: 15,
              borderRadius: 10,
              border: "1px solid #ddd",
              fontSize: 16,
              outline: "none",
              transition: "border-color 0.3s",
            }}
            onFocus={(e) => e.target.style.borderColor = "#2266cc"}
            onBlur={(e) => e.target.style.borderColor = "#ddd"}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{
              padding: 15,
              borderRadius: 10,
              border: "1px solid #ddd",
              fontSize: 16,
              outline: "none",
              transition: "border-color 0.3s",
            }}
            onFocus={(e) => e.target.style.borderColor = "#2266cc"}
            onBlur={(e) => e.target.style.borderColor = "#ddd"}
          />
          <a
            href="#forgot"
            style={{ fontSize: 14, color: "#2266cc", textAlign: "center", textDecoration: "none" }}
          >
            Forgot Password?
          </a>
          <button
            type="submit"
            style={{
              padding: 15,
              borderRadius: 25,
              border: "none",
              backgroundColor: "#30993d",
              color: "white",
              fontWeight: "bold",
              cursor: "pointer",
              marginTop: 10,
              fontSize: 16,
              transition: "background-color 0.3s",
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = "#267a2e"}
            onMouseLeave={(e) => e.target.style.backgroundColor = "#30993d"}
          >
            LOG IN
          </button>
        </form>
      </div>

      <button
        onClick={() => onNavigate("home")}
        style={{
          position: "absolute",
          top: 25,
          left: 25,
          backgroundColor: "#2266cc",
          border: "none",
          padding: "12px 20px",
          borderRadius: 20,
          color: "white",
          fontWeight: "bold",
          cursor: "pointer",
          fontSize: 14,
        }}
      >
        ← Back
      </button>
    </div>
  );
};

const SignupPage = ({ onNavigate }) => {
  const [collegeCode, setCollegeCode] = useState("");
  const [role, setRole] = useState("Alumnus/Alumna");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [year, setYear] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    onNavigate("dashboard");
  };

  return (
    <div
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=800&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
        fontFamily: "Arial, sans-serif",
        color: "#000",
        position: "relative",
      }}
    >
      <div
        style={{
          background: "linear-gradient(135deg, rgba(160, 200, 232, 0.95), rgba(150, 201, 165, 0.95))",
          backdropFilter: "blur(10px)",
          borderRadius: 20,
          padding: 40,
          width: "100%",
          maxWidth: 450,
          boxShadow: "0 15px 35px rgba(0,0,0,0.2)",
        }}
      >
        <h2 style={{ fontSize: 28, marginBottom: 10, textAlign: "center" }}>Join Campus Mentor</h2>
        <p style={{ marginBottom: 30, textAlign: "center", fontSize: 16 }}>
          Create your account and connect!
        </p>

        <form onSubmit={onSubmit} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <input
            type="text"
            placeholder="College Code"
            value={collegeCode}
            onChange={(e) => setCollegeCode(e.target.value)}
            required
            style={{
              padding: 15,
              borderRadius: 10,
              border: "1px solid #ddd",
              fontSize: 16,
              outline: "none",
              transition: "border-color 0.3s",
            }}
            onFocus={(e) => e.target.style.borderColor = "#2266cc"}
            onBlur={(e) => e.target.style.borderColor = "#ddd"}
          />
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            style={{
              padding: 15,
              borderRadius: 10,
              border: "1px solid #ddd",
              fontSize: 16,
              outline: "none",
              backgroundColor: "white",
            }}
          >
            <option>Alumnus/Alumna</option>
            <option>Student</option>
          </select>
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{
              padding: 15,
              borderRadius: 10,
              border: "1px solid #ddd",
              fontSize: 16,
              outline: "none",
              transition: "border-color 0.3s",
            }}
            onFocus={(e) => e.target.style.borderColor = "#2266cc"}
            onBlur={(e) => e.target.style.borderColor = "#ddd"}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{
              padding: 15,
              borderRadius: 10,
              border: "1px solid #ddd",
              fontSize: 16,
              outline: "none",
              transition: "border-color 0.3s",
            }}
            onFocus={(e) => e.target.style.borderColor = "#2266cc"}
            onBlur={(e) => e.target.style.borderColor = "#ddd"}
          />
          <input
            type="text"
            placeholder="Batch/Graduation Year"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            required
            style={{
              padding: 15,
              borderRadius: 10,
              border: "1px solid #ddd",
              fontSize: 16,
              outline: "none",
              transition: "border-color 0.3s",
            }}
            onFocus={(e) => e.target.style.borderColor = "#2266cc"}
            onBlur={(e) => e.target.style.borderColor = "#ddd"}
          />
          <button
            type="submit"
            style={{
              padding: 15,
              borderRadius: 25,
              border: "none",
              backgroundColor: "#30993d",
              color: "white",
              fontWeight: "bold",
              cursor: "pointer",
              marginTop: 10,
              fontSize: 16,
              transition: "background-color 0.3s",
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = "#267a2e"}
            onMouseLeave={(e) => e.target.style.backgroundColor = "#30993d"}
          >
            SIGN UP
          </button>
        </form>
        <p style={{ fontSize: 14, marginTop: 20, textAlign: "center" }}>
          Already have an account?{" "}
          <span
            style={{ color: "#2266cc", cursor: "pointer", fontWeight: "bold" }}
            onClick={() => onNavigate("login")}
          >
            Log In
          </span>
        </p>
      </div>

      <button
        onClick={() => onNavigate("home")}
        style={{
          position: "absolute",
          top: 25,
          left: 25,
          backgroundColor: "#2266cc",
          border: "none",
          padding: "12px 20px",
          borderRadius: 20,
          color: "white",
          fontWeight: "bold",
          cursor: "pointer",
          fontSize: 14,
        }}
      >
        ← Back
      </button>
    </div>
  );
};

const DashboardPage = ({ onNavigate }) => {
  const mentorshipCategories = [
    {
      title: "TECHNOLOGY & SOFTWARE",
      color: "#a8d5a8",
      mentors: [
        { name: "Jane Doe", role: "DM", avatar: "👩‍💻", status: "available" },
        { name: "John Smith", role: "DM", avatar: "👨‍💼", status: "busy", specialty: "Software Engineer" }
      ]
    },
    {
      title: "BUSINESS & ENTREPRENEURSHIP BUILDERS",
      color: "#f4e59c",
      mentors: [
        { name: "Sarah Lee", role: "DM", avatar: "👩‍💼", status: "available" },
        { name: "Sarah Lee", role: "DM", avatar: "👨‍🚀", status: "busy", specialty: "Founder & CEO, Business Analyst" }
      ]
    },
    {
      title: "ARTS & CREATIVE",
      color: "#a8d5a8",
      mentors: [
        { name: "Johnson", role: "DM", avatar: "🎨", status: "available" },
        { name: "Lisa Ray", role: "DM", avatar: "👩‍🎨", status: "available", specialty: "Writer/Editor" }
      ]
    }
  ];

  const handleDMClick = (mentor) => {
    onNavigate("dm", mentor);
  };

  const handleJoinChat = (category) => {
    onNavigate("community", category);
  };

  return (
    <div
      style={{
        background: "linear-gradient(135deg, #e8f4f8, #d4f0e8)",
        minHeight: "100vh",
        padding: "40px 20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Header */}
      <div style={{ 
        display: "flex", 
        justifyContent: "space-between", 
        alignItems: "center", 
        marginBottom: "40px",
        maxWidth: "1200px",
        margin: "0 auto 40px auto"
      }}>
        <div>
          <h1 style={{ 
            fontSize: "36px", 
            fontWeight: "bold", 
            color: "#2c5530",
            margin: 0 
          }}>
            CAMPUS MENTOR
          </h1>
          <p style={{ 
            fontSize: "16px", 
            color: "#666", 
            margin: "5px 0 0 0" 
          }}>
            Find Your Perfect Mentor
          </p>
        </div>
        <button
          onClick={() => onNavigate("home")}
          style={{
            backgroundColor: "#2266cc",
            border: "none",
            color: "white",
            padding: "10px 20px",
            borderRadius: "20px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Back to Home
        </button>
      </div>

      {/* Mentorship Categories Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
          gap: "30px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {mentorshipCategories.map((category, categoryIndex) => (
          <div
            key={categoryIndex}
            style={{
              backgroundColor: category.color,
              borderRadius: "20px",
              padding: "25px",
              boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
              minHeight: "300px",
            }}
          >
            {/* Category Header */}
            <div style={{ 
              display: "flex", 
              alignItems: "center", 
              marginBottom: "20px" 
            }}>
              <div style={{ 
                fontSize: "24px", 
                marginRight: "10px" 
              }}>
                {categoryIndex === 0 ? "💻" : categoryIndex === 1 ? "💼" : "🎨"}
              </div>
              <h3 style={{ 
                fontSize: "14px", 
                fontWeight: "bold", 
                color: "#333",
                margin: 0,
                textAlign: "center",
                flex: 1
              }}>
                {category.title}
              </h3>
            </div>

            {/* Mentors List */}
            <div style={{ marginBottom: "25px" }}>
              {category.mentors.map((mentor, mentorIndex) => (
                <div
                  key={mentorIndex}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    backgroundColor: "rgba(255,255,255,0.7)",
                    borderRadius: "15px",
                    padding: "12px 15px",
                    marginBottom: "10px",
                    cursor: "pointer",
                    transition: "transform 0.2s",
                  }}
                  onMouseEnter={(e) => e.target.style.transform = "scale(1.02)"}
                  onMouseLeave={(e) => e.target.style.transform = "scale(1)"}
                >
                  <div style={{ 
                    fontSize: "24px", 
                    marginRight: "12px" 
                  }}>
                    {mentor.avatar}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ 
                      fontSize: "14px", 
                      fontWeight: "bold", 
                      color: "#333" 
                    }}>
                      {mentor.name}
                    </div>
                    {mentor.specialty && (
                      <div style={{ 
                        fontSize: "12px", 
                        color: "#666",
                        marginTop: "2px"
                      }}>
                        {mentor.specialty}
                      </div>
                    )}
                  </div>
                  <div
                    style={{
                      backgroundColor: mentor.status === 'available' ? "#2266cc" : "#666",
                      color: "white",
                      padding: "4px 12px",
                      borderRadius: "12px",
                      fontSize: "12px",
                      fontWeight: "bold",
                      cursor: "pointer"
                    }}
                    onClick={() => handleDMClick(mentor)}
                  >
                    {mentor.role}
                  </div>
                </div>
              ))}
            </div>

            {/* Community Chat Section */}
            <div
              style={{
                backgroundColor: "rgba(255,255,255,0.8)",
                borderRadius: "15px",
                padding: "20px",
                textAlign: "center",
              }}
            >
              <div style={{ 
                display: "flex", 
                alignItems: "center", 
                justifyContent: "center",
                marginBottom: "15px"
              }}>
                <div style={{ 
                  fontSize: "20px", 
                  marginRight: "8px" 
                }}>
                  💬
                </div>
                <h4 style={{ 
                  fontSize: "16px", 
                  fontWeight: "bold", 
                  color: "#333",
                  margin: 0
                }}>
                  Community Chat Room
                </h4>
              </div>
              <button
                style={{
                  backgroundColor: "#4CAF50",
                  border: "none",
                  color: "white",
                  padding: "10px 25px",
                  borderRadius: "20px",
                  cursor: "pointer",
                  fontWeight: "bold",
                  fontSize: "14px",
                  transition: "background-color 0.3s",
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = "#45a049"}
                onMouseLeave={(e) => e.target.style.backgroundColor = "#4CAF50"}
                onClick={() => handleJoinChat(category)}
              >
                Join Chat
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <footer
        style={{
          textAlign: "center",
          marginTop: "60px",
          padding: "20px",
          color: "#666",
          fontSize: "14px",
        }}
      >
        <a href="#about" style={{ margin: "0 15px", color: "inherit", textDecoration: "none" }}>About Us</a>
        <a href="#contact" style={{ margin: "0 15px", color: "inherit", textDecoration: "none" }}>Contact</a>
        <a href="#privacy" style={{ margin: "0 15px", color: "inherit", textDecoration: "none" }}>Privacy</a>
        <a href="#terms" style={{ margin: "0 15px", color: "inherit", textDecoration: "none" }}>Terms</a>
      </footer>
    </div>
  );
};

const DirectMessagesPage = ({ onNavigate, selectedMentor }) => {
  const [currentChat, setCurrentChat] = useState(selectedMentor || { name: "Sarah Lee", avatar: "👩‍💼", specialty: "Founder & CEO" });
  const [newMessage, setNewMessage] = useState("");
  const [conversations, setConversations] = useState([
    { 
      id: 1, 
      name: "Jane Doe", 
      avatar: "👩‍💻", 
      lastMessage: "Thanks for your connection! I love to help...",
      isActive: false 
    },
    { 
      id: 2, 
      name: "Jane Doe", 
      avatar: "👩‍💻", 
      lastMessage: "Thanks your connection! I'm habout your startups.",
      isActive: false 
    },
    { 
      id: 3, 
      name: "Sarah Lee", 
      avatar: "👩‍💼", 
      specialty: "Software Engineer",
      lastMessage: "Hi Sarah, my naaa a meet r! Hi Sarah, my naaa meet r!",
      isActive: true 
    },
    { 
      id: 4, 
      name: "Jane Doe", 
      avatar: "👩‍💻", 
      lastMessage: "Hi Alex, great na meet r! I'm happy you share. What most currious about?",
      isActive: false 
    },
    { 
      id: 5, 
      name: "John Smith", 
      avatar: "👨‍💼", 
      specialty: "Software Engineer",
      lastMessage: "Hi Alex, great minded in about?",
      isActive: false 
    },
    { 
      id: 6, 
      name: "John Smith", 
      avatar: "👨‍💼", 
      specialty: "Software Engineer",
      lastMessage: "",
      isActive: false 
    },
    { 
      id: 7, 
      name: "John Smith", 
      avatar: "👨‍💻", 
      specialty: "Oogrt horiluer",
      lastMessage: "",
      isActive: false 
    }
  ]);

  const [messages, setMessages] = useState([
    { id: 1, text: "Hi Sarah,", sender: "user", time: "10:30" },
    { id: 2, text: "Thanks your connection! I love to habout your experience.", sender: "contact", time: "10:32" },
    { id: 3, text: "Hi Sarah.", sender: "user", time: "10:35" },
    { id: 4, text: "Thanks your connection! I'm habout your startups.", sender: "user", time: "10:36" },
    { id: 5, text: "Hi Sarah, my naaa a meet r!", sender: "user", time: "10:38" },
    { id: 6, text: "Hi Alex, great na meet r! I'm happy you share. What most currious about?", sender: "contact", time: "10:40" },
    { id: 7, text: "Hi Alex, great minded in about?", sender: "user", time: "10:42" }
  ]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (newMessage.trim()) {
      const newMsg = {
        id: messages.length + 1,
        text: newMessage,
        sender: "user",
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages([...messages, newMsg]);
      setNewMessage("");
    }
  };

  return (
    <div
      style={{
        background: "linear-gradient(135deg, #b8d4f0, #c8e6d4)",
        minHeight: "100vh",
        padding: "20px",
        fontFamily: "Arial, sans-serif",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <div
        style={{
          backgroundColor: "rgba(180, 220, 180, 0.9)",
          borderRadius: "25px",
          width: "90%",
          maxWidth: "1000px",
          height: "85vh",
          display: "flex",
          overflow: "hidden",
          boxShadow: "0 15px 40px rgba(0,0,0,0.2)"
        }}
      >
        {/* Left Sidebar - Conversations */}
        <div
          style={{
            width: "350px",
            backgroundColor: "rgba(160, 210, 160, 0.8)",
            padding: "20px",
            borderRight: "1px solid rgba(255,255,255,0.3)",
            overflowY: "auto"
          }}
        >
          <h2 style={{ 
            fontSize: "22px", 
            fontWeight: "bold", 
            color: "#333", 
            marginBottom: "20px",
            textAlign: "center" 
          }}>
            Direct Messages
          </h2>
          
          {conversations.map((conv) => (
            <div
              key={conv.id}
              style={{
                display: "flex",
                alignItems: "center",
                padding: "12px 15px",
                backgroundColor: conv.isActive ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.5)",
                borderRadius: "15px",
                marginBottom: "8px",
                cursor: "pointer",
                transition: "all 0.2s",
                border: conv.isActive ? "2px solid #4CAF50" : "2px solid transparent"
              }}
              onClick={() => setCurrentChat(conv)}
              onMouseEnter={(e) => !conv.isActive && (e.target.style.backgroundColor = "rgba(255,255,255,0.7)")}
              onMouseLeave={(e) => !conv.isActive && (e.target.style.backgroundColor = "rgba(255,255,255,0.5)")}
            >
              <div style={{ 
                fontSize: "20px", 
                marginRight: "12px",
                width: "30px",
                textAlign: "center"
              }}>
                {conv.avatar}
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ 
                  fontSize: "14px", 
                  fontWeight: "bold", 
                  color: "#333",
                  marginBottom: "2px"
                }}>
                  {conv.name}
                </div>
                {conv.specialty && (
                  <div style={{ 
                    fontSize: "11px", 
                    color: "#666",
                    marginBottom: "4px"
                  }}>
                    {conv.specialty}
                  </div>
                )}
                <div style={{ 
                  fontSize: "12px", 
                  color: "#666",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis"
                }}>
                  {conv.lastMessage}
                </div>
              </div>
              <div
                style={{
                  backgroundColor: "#4CAF50",
                  color: "white",
                  padding: "4px 8px",
                  borderRadius: "10px",
                  fontSize: "10px",
                  fontWeight: "bold"
                }}
              >
                DM
              </div>
            </div>
          ))}
        </div>

        {/* Right Side - Chat Area */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            backgroundColor: "rgba(200, 230, 200, 0.8)"
          }}
        >
          {/* Chat Header */}
          <div
            style={{
              padding: "20px",
              borderBottom: "1px solid rgba(255,255,255,0.3)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between"
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <div style={{ fontSize: "24px", marginRight: "12px" }}>
                {currentChat.avatar}
              </div>
              <div>
                <div style={{ 
                  fontSize: "18px", 
                  fontWeight: "bold", 
                  color: "#333" 
                }}>
                  {currentChat.name}
                </div>
                {currentChat.specialty && (
                  <div style={{ 
                    fontSize: "14px", 
                    color: "#666" 
                  }}>
                    {currentChat.specialty}
                  </div>
                )}
              </div>
            </div>
            <div
              style={{
                backgroundColor: "#4CAF50",
                color: "white",
                padding: "6px 12px",
                borderRadius: "15px",
                fontSize: "12px",
                fontWeight: "bold"
              }}
            >
              Online
            </div>
          </div>

          {/* Messages Area */}
          <div
            style={{
              flex: 1,
              padding: "20px",
              overflowY: "auto",
              display: "flex",
              flexDirection: "column",
              gap: "12px"
            }}
          >
            {messages.map((message) => (
              <div
                key={message.id}
                style={{
                  display: "flex",
                  justifyContent: message.sender === "user" ? "flex-end" : "flex-start"
                }}
              >
                <div
                  style={{
                    backgroundColor: message.sender === "user" ? "#4CAF50" : "rgba(255,255,255,0.9)",
                    color: message.sender === "user" ? "white" : "#333",
                    padding: "12px 16px",
                    borderRadius: "18px",
                    maxWidth: "70%",
                    fontSize: "14px",
                    lineHeight: "1.4",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
                  }}
                >
                  {message.text}
                </div>
              </div>
            ))}
          </div>

          {/* Message Input */}
          <div
            style={{
              padding: "20px",
              borderTop: "1px solid rgba(255,255,255,0.3)",
              backgroundColor: "rgba(255,255,255,0.8)"
            }}
          >
            <form 
              onSubmit={handleSendMessage}
              style={{ display: "flex", gap: "12px", alignItems: "center" }}
            >
              <div style={{ fontSize: "20px", cursor: "pointer" }}>📎</div>
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Type your message..."
                style={{
                  flex: 1,
                  padding: "12px 18px",
                  borderRadius: "25px",
                  border: "1px solid #ddd",
                  fontSize: "14px",
                  outline: "none",
                  backgroundColor: "white"
                }}
              />
              <button
                type="submit"
                style={{
                  backgroundColor: "#4CAF50",
                  border: "none",
                  color: "white",
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "16px"
                }}
              >
                ➤
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Back Button */}
      <button
        onClick={() => onNavigate("dashboard")}
        style={{
          position: "absolute",
          top: "25px",
          left: "25px",
          backgroundColor: "#2266cc",
          border: "none",
          color: "white",
          padding: "10px 20px",
          borderRadius: "20px",
          cursor: "pointer",
          fontWeight: "bold",
          fontSize: "14px"
        }}
      >
        ← Back to Dashboard
      </button>
    </div>
  );
};

const CommunityChat = ({ onNavigate, category }) => {
  const [newMessage, setNewMessage] = useState("");
  const [messages, setMessages] = useState([
    { id: 1, sender: "Alex Chen", avatar: "👨‍💻", text: "Hey everyone! Just started learning React. Any tips?", time: "10:30", isOwn: false },
    { id: 2, sender: "Sarah Kim", avatar: "👩‍💼", text: "Welcome Alex! Start with the official React docs, they're excellent.", time: "10:32", isOwn: false },
    { id: 3, sender: "You", avatar: "👤", text: "Also recommend building small projects to practice!", time: "10:35", isOwn: true },
    { id: 4, sender: "Mike Johnson", avatar: "👨‍🚀", text: "Don't forget about React hooks - they're game changers!", time: "10:37", isOwn: false },
    { id: 5, sender: "Lisa Ray", avatar: "👩‍🎨", text: "I found CodePen great for experimenting with React components", time: "10:40", isOwn: false }
  ]);

  const [activeUsers] = useState([
    { name: "Alex Chen", avatar: "👨‍💻", status: "online" },
    { name: "Sarah Kim", avatar: "👩‍💼", status: "online" },
    { name: "Mike Johnson", avatar: "👨‍🚀", status: "away" },
    { name: "Lisa Ray", avatar: "👩‍🎨", status: "online" },
    { name: "David Park", avatar: "👨‍🎓", status: "online" },
    { name: "Emma Wilson", avatar: "👩‍💻", status: "away" }
  ]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (newMessage.trim()) {
      const newMsg = {
        id: messages.length + 1,
        sender: "You",
        avatar: "👤",
        text: newMessage,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        isOwn: true
      };
      setMessages([...messages, newMsg]);
      setNewMessage("");
    }
  };

  const categoryInfo = category || { title: "TECHNOLOGY & SOFTWARE", color: "#a8d5a8" };
  const categoryIcon = category?.title.includes("TECHNOLOGY") ? "💻" : 
                      category?.title.includes("BUSINESS") ? "💼" : "🎨";

  return (
    <div
      style={{
        background: "linear-gradient(135deg, #e8f4f8, #d4f0e8)",
        minHeight: "100vh",
        padding: "20px",
        fontFamily: "Arial, sans-serif",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <div
        style={{
          backgroundColor: categoryInfo.color,
          borderRadius: "25px",
          width: "90%",
          maxWidth: "1200px",
          height: "85vh",
          display: "flex",
          overflow: "hidden",
          boxShadow: "0 15px 40px rgba(0,0,0,0.2)"
        }}
      >
        {/* Left Sidebar - Active Users */}
        <div
          style={{
            width: "280px",
            backgroundColor: "rgba(255,255,255,0.7)",
            padding: "20px",
            borderRight: "1px solid rgba(255,255,255,0.3)",
            overflowY: "auto"
          }}
        >
          <div style={{ 
            display: "flex", 
            alignItems: "center", 
            marginBottom: "20px",
            justifyContent: "center"
          }}>
            <div style={{ fontSize: "24px", marginRight: "10px" }}>{categoryIcon}</div>
            <h2 style={{ 
              fontSize: "16px", 
              fontWeight: "bold", 
              color: "#333", 
              margin: 0,
              textAlign: "center"
            }}>
              Active Members
            </h2>
          </div>
          
          <div style={{ marginBottom: "15px", textAlign: "center" }}>
            <span style={{ 
              backgroundColor: "#4CAF50", 
              color: "white", 
              padding: "4px 12px", 
              borderRadius: "12px", 
              fontSize: "12px", 
              fontWeight: "bold" 
            }}>
              {activeUsers.filter(u => u.status === 'online').length} Online
            </span>
          </div>

          {activeUsers.map((user, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                alignItems: "center",
                padding: "10px 12px",
                backgroundColor: "rgba(255,255,255,0.8)",
                borderRadius: "12px",
                marginBottom: "8px",
                cursor: "pointer",
                transition: "all 0.2s"
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = "rgba(255,255,255,1)"}
              onMouseLeave={(e) => e.target.style.backgroundColor = "rgba(255,255,255,0.8)"}
            >
              <div style={{ 
                fontSize: "18px", 
                marginRight: "10px",
                position: "relative"
              }}>
                {user.avatar}
                <div
                  style={{
                    position: "absolute",
                    bottom: "-2px",
                    right: "-2px",
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    backgroundColor: user.status === 'online' ? "#4CAF50" : "#FFA500",
                    border: "1px solid white"
                  }}
                />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ 
                  fontSize: "13px", 
                  fontWeight: "bold", 
                  color: "#333"
                }}>
                  {user.name}
                </div>
                <div style={{ 
                  fontSize: "11px", 
                  color: user.status === 'online' ? "#4CAF50" : "#FFA500",
                  textTransform: "capitalize"
                }}>
                  {user.status}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Side - Chat Area */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            backgroundColor: "rgba(255,255,255,0.8)"
          }}
        >
          {/* Chat Header */}
          <div
            style={{
              padding: "20px",
              borderBottom: "1px solid rgba(255,255,255,0.3)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "rgba(255,255,255,0.9)"
            }}
          >
            <div style={{ fontSize: "24px", marginRight: "12px" }}>
              {categoryIcon}
            </div>
            <div>
              <h1 style={{ 
                fontSize: "18px", 
                fontWeight: "bold", 
                color: "#333",
                margin: 0,
                textAlign: "center"
              }}>
                {categoryInfo.title} Community
              </h1>
              <p style={{ 
                fontSize: "12px", 
                color: "#666",
                margin: "2px 0 0 0",
                textAlign: "center"
              }}>
                Connect, share knowledge, and grow together
              </p>
            </div>
          </div>

          {/* Messages Area */}
          <div
            style={{
              flex: 1,
              padding: "20px",
              overflowY: "auto",
              display: "flex",
              flexDirection: "column",
              gap: "15px"
            }}
          >
            {messages.map((message) => (
              <div
                key={message.id}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "10px",
                  flexDirection: message.isOwn ? "row-reverse" : "row"
                }}
              >
                <div style={{ 
                  fontSize: "20px",
                  minWidth: "30px"
                }}>
                  {message.avatar}
                </div>
                <div style={{ 
                  flex: 1, 
                  maxWidth: message.isOwn ? "70%" : "80%"
                }}>
                  {!message.isOwn && (
                    <div style={{
                      fontSize: "12px",
                      fontWeight: "bold",
                      color: "#666",
                      marginBottom: "4px"
                    }}>
                      {message.sender}
                    </div>
                  )}
                  <div
                    style={{
                      backgroundColor: message.isOwn ? "#4CAF50" : "rgba(255,255,255,0.9)",
                      color: message.isOwn ? "white" : "#333",
                      padding: "12px 16px",
                      borderRadius: message.isOwn ? "18px 18px 4px 18px" : "18px 18px 18px 4px",
                      fontSize: "14px",
                      lineHeight: "1.4",
                      boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                      marginLeft: message.isOwn ? "auto" : "0"
                    }}
                  >
                    {message.text}
                  </div>
                  <div style={{
                    fontSize: "10px",
                    color: "#999",
                    marginTop: "4px",
                    textAlign: message.isOwn ? "right" : "left"
                  }}>
                    {message.time}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Message Input */}
          <div
            style={{
              padding: "20px",
              borderTop: "1px solid rgba(255,255,255,0.3)",
              backgroundColor: "rgba(255,255,255,0.9)"
            }}
          >
            <form 
              onSubmit={handleSendMessage}
              style={{ display: "flex", gap: "12px", alignItems: "center" }}
            >
              <div style={{ fontSize: "20px", cursor: "pointer" }}>📎</div>
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Share your thoughts with the community..."
                style={{
                  flex: 1,
                  padding: "12px 18px",
                  borderRadius: "25px",
                  border: "1px solid #ddd",
                  fontSize: "14px",
                  outline: "none",
                  backgroundColor: "white"
                }}
              />
              <button
                type="submit"
                style={{
                  backgroundColor: "#4CAF50",
                  border: "none",
                  color: "white",
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "16px"
                }}
              >
                ➤
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Back Button */}
      <button
        onClick={() => onNavigate("dashboard")}
        style={{
          position: "absolute",
          top: "25px",
          left: "25px",
          backgroundColor: "#2266cc",
          border: "none",
          color: "white",
          padding: "10px 20px",
          borderRadius: "20px",
          cursor: "pointer",
          fontWeight: "bold",
          fontSize: "14px"
        }}
      >
        ← Back to Dashboard
      </button>
    </div>
  );
};

export default function CampusMentorApp() {
  const [page, setPage] = useState("home");
  const [selectedMentor, setSelectedMentor] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleNavigation = (newPage, data = null) => {
    if (newPage === "dm") {
      setSelectedMentor(data);
      setPage("dm");
    } else if (newPage === "community") {
      setSelectedCategory(data);
      setPage("community");
    } else {
      setPage(newPage);
    }
  };

  return (
    <div style={{ margin: 0, padding: 0 }}>
      {page === "home" && <HomePage onNavigate={handleNavigation} />}
      {page === "login" && <LoginPage onNavigate={handleNavigation} />}
      {page === "signup" && <SignupPage onNavigate={handleNavigation} />}
      {page === "dashboard" && <DashboardPage onNavigate={handleNavigation} />}
      {page === "dm" && <DirectMessagesPage onNavigate={handleNavigation} selectedMentor={selectedMentor} />}
      {page === "community" && <CommunityChat onNavigate={handleNavigation} category={selectedCategory} />}
    </div>
  );
}