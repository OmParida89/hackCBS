import React from 'react';
import { teamMembers, mentors, teachers } from '../data/teamData';

function CrewGrid({ members }) {
  return (
    <div className="crew-grid">
      {members.map((member, idx) => (
        <div className="crew-card" key={idx} data-aos="fade-up" data-aos-duration="600" data-aos-delay={idx * 40}>
          <img loading="lazy" decoding="async" src={member.img} alt={member.name} className="crew-photo" />
          <p className="crew-name">{member.name}</p>
          <h5 className="crew-role">{member.role}</h5>
          <a
            className="crew-linkedin"
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${member.name} on LinkedIn`}
          >
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      ))}
    </div>
  );
}

export default function TeamSection() {
  return (
    <section id="teams" className="pb100 pt100">
      {/* crew- prefix: this codebase's global style-v8.css already defines
          .team-box (three times, with conflicting values) and .team-member-
          cards, so those names would silently collide. */}
      <style>{`
        .crew-grid {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 28px;
          margin-bottom: 40px;
        }

        .crew-card {
          flex: 0 1 300px;
          max-width: 300px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 32px;
          border-radius: 16px;
          background:
            linear-gradient(165deg, rgba(255, 40, 0, 0.1) 0%, transparent 55%),
            linear-gradient(165deg, #1c1c1f 0%, #0a0a0c 78%);
          border: 1px solid rgba(255, 40, 0, 0.3);
          box-shadow: 0 0 14px 1px rgba(255, 40, 0, 0.14);
          transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
        }

        .crew-card:hover {
          transform: scale(1.02);
          border-color: rgba(255, 40, 0, 0.7);
          box-shadow: 0 0 22px 3px rgba(255, 40, 0, 0.3);
        }

        .crew-photo {
          width: 90%;
          aspect-ratio: 1 / 1;
          border-radius: 12px;
          object-fit: cover;
          display: block;
          border: 1px solid rgba(255, 40, 0, 0.35);
        }

        .crew-name {
          margin: 20px 0 0;
          font-size: 22px;
          font-weight: 600;
          color: #fff;
        }

        .crew-role {
          margin: 8px 0 0;
          font-size: 17px;
          line-height: 1.5;
          color: #c5c5c5;
        }

        .crew-linkedin {
          margin-top: 12px;
          font-size: 22px;
          color: rgba(255, 40, 0, 0.75);
          transition: color 0.2s ease;
        }

        .crew-linkedin:hover {
          color: #FF2800;
        }

        /* .title-dark is shared with the Mentors/Teacher In-Charge h4s below,
           which otherwise renders this top-level heading at the same size. */
        .crew-main-title {
          font-size: 3.5rem;
        }
      `}</style>

      <div className="container">
        <div className="section_title">
          <h2 className="title-dark crew-main-title" data-aos="fade-right" data-aos-duration="1000">
            Meet The Crew
          </h2>
        </div>

        {/* Lead & Core Organizers */}
        <CrewGrid members={teamMembers} />

        {/* Mentors & Advisors */}
        <div className="section_title mt-5">
          <h4 className="title-dark clr-white">Mentors</h4>
        </div>
        <CrewGrid members={mentors} />

        {/* Teacher In-Charge */}
        <div className="section_title mt-5">
          <h4 className="title-dark clr-white">Teacher In-Charge</h4>
        </div>
        <CrewGrid members={teachers} />
      </div>
    </section>
  );
}
