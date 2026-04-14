import { resume } from "react-dom/server";
import type { Route } from "./+types/home";
import Navbar from "../../componnents/navbar";
import { resumes } from "~/constants";
import ResumeCard from "../../componnents/ResumeCard";
import { useLocation, useNavigate } from "react-router";
import { useEffect } from "react";
import { usePuterStore } from "~/lip/puter";
export function meta({}: Route.MetaArgs) {
  return [
    { title: "Resumind" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
      const { auth} = usePuterStore();
    const navigate = useNavigate();
    useEffect(()=>{
      if(!auth.isAuthenticated) navigate('/auth?next=/')
    },[auth.isAuthenticated])
  return (
    <main className="bg-[url('/images/bg-main.svg')] bg-cover">
      <Navbar />

      <section className="main-section">
        <div className="page-heading">
          <h1>
            Track Your Applications & Resume Ratings Review your submissions and
            check AI-powered feedback.
          </h1>
          <h2>Review your submissions and check AI-powered feedback.</h2>
        </div>
        {resumes.length > 0 && (
          <div className="resumes-section grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
            {resumes.map((resume) => (
              <ResumeCard key={resume.id} resume={resume} />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
