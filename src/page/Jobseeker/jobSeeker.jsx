import JobDiscription from "../../components/JobDiscription/jobDiscription"
import TopSearches from "../../components/TopSearches/topSearches"
export default function JobSeekers() {
    return (
        <div className=" w-[100%]">
            <div className="flex flex-row p-5 border-2 border-b-gray-200 ">
                <div className="w-[70%]">
                    <h2 className="text-[24px] font-bold text-Dark">Search For New Job Opportunities</h2>
                    <p className="pt-1 text-[15px]">Personalized filter makes it quick and easy to find the job you care about</p>
                    <div className="mt-8">
                        <input className="border outline-none border-black rounded-lg p-1 w-[49%]" type="search" placeholder="job title or keywords"/>
                        <input className="border outline-none border-black rounded-lg p-1 w-[49%] ml-4" type="text" placeholder="Location"/>
                    </div>
                </div>
                <div className=" w-[25%] flex justify-center items-end ml-4">
                    <button className="w-[45%] border-black border bg-white rounded-xl p-1 hover:bg-primaryOrange hover:border-0 hover:text-white">
                        filter
                    </button>
                    <button className="w-[45%] border-black border bg-Dark text-white rounded-xl p-1 ml-3  hover:bg-primaryOrange hover:border-0 hover:text-black">
                        Search
                    </button>
                </div>
            </div>
            <div className="">
                <div>
                    <div className="flex justify-between items-center w-[70%] pl-5 mt-3">
                        <div>1000 Jobs Open</div>
                        <div className="flex border items-center rounded-xl p-1 border-black">
                            <p>sorting</p>
                            <span className="bg-white">⬆⬇</span>
                        </div> 
                    </div>
                    <JobDiscription/>
                    <JobDiscription/>
                    <JobDiscription/>
                    <JobDiscription/>
                    <JobDiscription/>
                </div>
                <TopSearches/>
            </div>

        </div>
    )
}

{/* <section id="seekersDashbord allPages">
       
       <div class="bodySection">
               <section class="jobBorad">
                        <div class="allJobs">
                            <div class="jobs">
                                <div class="job">
                                    <div class="jobTitle">
                                        <h3>Graphic Designer</h3>
                                        <div >1 hour ago</div>
                                    </div>
                                    <div class="payment">
                                        <h3>Mos</h3>
                                        <p>$ 50k-70k USD</p>
                                        <div>United State</div>
                                    </div>
                                    <div class="jobDiscription">
                                        <div>Full Time</div>
                                        <div>Design</div>
                                        <div>2 years of experience</div>
                                    </div>
                                </div>
                                <div class="Btn">
                                    <p>repost</p>
                                    <button>Apply Now</button>
                                </div>
                            </div>

                            <div class="jobs">
                                <div class="job">
                                    <div class="jobTitle">
                                        <h3>Graphic Designer</h3>
                                        <div >1 hour ago</div>
                                    </div>
                                    <div class="payment">
                                        <h3>Mos</h3>
                                        <p>$ 50k-70k USD</p>
                                        <div>United State</div>
                                    </div>
                                    <div class="jobDiscription">
                                        <div>Full Time</div>
                                        <div>Design</div>
                                        <div>2 years of experience</div>
                                    </div>
                                </div>
                                <div class="Btn">
                                    <p>repost</p>
                                    <button>Apply Now</button>
                                </div>
                            </div>

                        </div>

                        <div class="searchBored">
                            <h2>Top searches</h2>
                            <div class="topSearch">
                                <div class="searches">
                                    <div>Graphic Designer</div>
                                    <div>50 jobs</div>
                                </div>
                                <div class="searches">
                                    <div>Web Developer</div>
                                    <div>50 jobs</div>
                                </div>
                                <div class="searches">
                                    <div>3D Designer</div>
                                    <div>50 jobs</div>
                                </div>
                                <div class="searches">
                                    <div>Softwear Developer</div>
                                    <div>50 jobs</div>
                                </div>
                                <div class="searches">
                                    <div>UI/Ux Designer</div>
                                    <div>50 jobs</div>
                                </div>
                            </div>
                        <div class="topSearchBtn">
                            <button>Sign up to find your dream job</button>
                        </div>
                        </div>
                        
                </section>  
               
        </div>
</section> */}