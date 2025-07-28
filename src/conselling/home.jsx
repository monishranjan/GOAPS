import TopBar from "../components/counsellingComps/CounsellingTopbar";
import CounsellingHeader from "../components/counsellingComps/CounsellingHeader";
import CounsellingNavbar from "../components/counsellingComps/CounsellingNavbar";
import CounsellingLatestNews from "../components/counsellingComps/LatestNewsTicker";
import NewsEvents from "../components/counsellingComps/CounsellingNewsEvent";
import PublicNotices from "../components/counsellingComps/CounsellingPublicNotices";
import Footer from "../components/Footer";

const CounsellingHome = () => {
  return (
    <main className="min-h-screen">
      <TopBar />
      <CounsellingHeader />
      <CounsellingNavbar />
      <CounsellingLatestNews />

      <section id="SkipContent" className="mx-80 my-10 pb-24">
        <div className="flex flex-col md:flex-row gap-10">
          <div className="leftPart w-full md:w-3/5">
            <div className="text-black flex flex-col gap-3">
              <h1 className="text-2xl font-medium uppercase">Introduction</h1>
              <p className="text-sm text-justify">
                CCMT-2025 is a common platform for candidates to apply for
                M.Tech./ M.Arch./ M.Plan. programmes, based on their GATE score
                of years 2023, 2024 and 2025, in NITs, IIEST Shibpur, and some
                IIITs and CFTIs (For details, please refer to the list of
                Participating Institutes on CCMT website).
              </p>
              <button className="bg-[#fbac1b] text-black text-sm px-3 py-1 mt-2 max-w-fit">
                View More
              </button>
            </div>

            <div className="candidate-activity-board p-5 bg-[#052963] text-white rounded-md mt-8">
              <h2 className="text-2xl font-medium mb-3">
                Candidate Activity Board
              </h2>
              <ul className="list-disc pl-5 text-sm space-y-3 mb-3">
                <li>
                  <a
                    href="https://example.com/tentative-seat-vacancy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline hover:cursor-pointer"
                  >
                    Tentative Seat Vacancy for Special Rounds 2023
                  </a>
                </li>
                <li>
                  <a
                    href="/admissions"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline hover:cursor-pointer"
                  >
                    View Seat allotment result of Round 5 (Special Round II)
                  </a>
                </li>
                <li>
                  <a
                    href="https://example.com/seat-matrix-2023"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline hover:cursor-pointer"
                  >
                    Seat Matrix in Regular Rounds 2023
                  </a>
                </li>
                <li>
                  <a
                    href="https://example.com/participating-institutes-fee"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline hover:cursor-pointer"
                  >
                    Participating Institutes Fee Details
                  </a>
                </li>
                <li>
                  <a
                    href="https://example.com/mapping-details"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline hover:cursor-pointer"
                  >
                    View Mapping of [Institute, Departments, PG Program] VS
                    [GATE Paper & Qualifying Degree]
                  </a>
                </li>
                <li>
                  <a
                    href="https://example.com/special-eligibility"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline hover:cursor-pointer"
                  >
                    View Special Eligibility Restrictions
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="rightPart w-full md:w-2/5 flex flex-col justify-between">
            <NewsEvents />
            <PublicNotices />
          </div>
        </div>
      </section>

      <div className="footer">
        <Footer />
      </div>
    </main>
  );
};

export default CounsellingHome;
