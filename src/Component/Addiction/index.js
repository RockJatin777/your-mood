import alcohal_logo from '../Assets/Alcohol.jpg'

import './index.css'

function Addiction(){
    return(
        <>
            <main className='addiction-container'>
                <div class="addiction-content-container">
                    <h1 class="font-lg">Addiction </h1>
                    <p>Addiction affects mental health as increased anxiety and depression substance use can exacerbate feelings of anxiety and depression, creating a cycle that makes recovery challenging. Addiction can impair judgement, memory, and decision-making, affecting daily functioning and relationaships.</p>
                    <h2>How can you break an addiction?</h2>
                    <p>The first step in overcoming addiction is to desire change and avoid the people, places and things which promote the addiction. Support groups, mentors, and 12 step programs provide help, while counselors, recovery centers, and physicians provide expertise and medication to treat cravings and the effects of withdrawal. Eating healthy and getting exercise also play an important role in recovery.</p>
                </div>
                <div>
                    <img className='alc-image' src={alcohal_logo} alt='' />
                </div>
            </main>
            <h1 className='exp-heading'>Explore Addiction</h1>
            <div class="card-container">
                    <div class="card">
                        <img src="" alt="Sample 1" className="card-img" />
                        <div class="card-content">
                            <h3 class="card-title">Impact on Life and Relationships</h3>
                            <p class="card-description">Addiction affects various aspects of life, including personal relationships, mental and physical health, and financial stability.</p>
                            <button class="card-btn">Learn More</button>
                        </div>
                    </div>

                    <div class="card">
                        <img src="" alt="Sample 2" className="card-img" />
                        <div class="card-content">
                            <h3 class="card-title">Biological and Psychological Factors</h3>
                            <p class="card-description">Addiction is often driven by complex interactions between the brain's reward system and environmental or psychological triggers.</p>
                            <button class="card-btn">Learn More</button>
                        </div>
                    </div>

                    <div class="card">
                        <img src="" alt="Sample 3" className="card-img" />
                        <div class="card-content">
                            <h3 class="card-title">Progressive and Chronic Nature</h3>
                            <p class="card-description">Addiction tends to develop gradually, starting with casual use or exposure and potentially evolving into a more intense, compulsive behavior.</p>
                            <button class="card-btn">Learn More</button>
                        </div>
                    </div>
                </div>
        </>
    )
        
}

export default Addiction