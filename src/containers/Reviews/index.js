import React from 'react';
import Page from 'components/Page';
import { H1, H2, H3, Quote } from 'components/Typography';
import './styles.css';

const Reviews = () => {
  return (
    <Page title="Reviews" description="Reviews & recommendations from peers">
      <section className="quotes">
        <H1>Reviews</H1>
        <article>
          <img
            alt="Emmanuel Mwangi"
            src="/images/people/emmanuel-mwangi.jpeg"
          />
          <header>
            <H2>Lead Back-End Engineer at Endpoint</H2>
            <H3>
              <a
                href="http://www.linkedin.com/in/emmanuelm"
                target="_blank"
                rel="noopener noreferrer"
              >
                Emmanuel Mwangi
              </a>
            </H3>
          </header>
          <Quote>
            <p>
              Tiffany is one of those rare people who are both talented
              engineers and have a deep understanding of people. I worked
              directly with Tiffany at Endpoint where she was the Lead of
              Front-End Engineering and I was her counterpart Lead of Back-End
              Engineering.
            </p>
            <p>
              She can see a problem from a high-level business-value to the
              gritty technical details in the UI and uses this insight to give
              clear actionable feedback. She cuts right through to the heart of
              any issue and with her in meetings; they went faster, were clearer
              to everyone in the room, and were more likely to have actions to
              resolve issues rather than more meetings.
            </p>
            <p>
              Her grasp of both her team’s technical and emotional status
              impressed me and is a sign of a great team leader. She always knew
              exactly where they were and what they could do. She knew what
              various team members were interested in, what their goals were,
              and could map new projects to various team members well.
            </p>
            <p>
              Tiffany was great to work with and a powerful asset to any team
              she a part of, even more so when she’s leading.
            </p>
          </Quote>
        </article>
        <article>
          <img alt="Wendy Honeycutt" src="/images/people/wendy-honeycutt.jpg" />
          <header>
            <H2>UX/UI Interaction Designer at Skechers</H2>
            <H3>
              <a
                href="http://www.linkedin.com/in/wendyhoneycutt"
                target="_blank"
                rel="noopener noreferrer"
              >
                Wendy Honeycutt
              </a>
            </H3>
          </header>
          <Quote>
            <p>
              I feel fortunate to have worked with Tiffany for nearly four
              years. She possesses an amazing ability as a Front End Manager &
              Lead JavaScript Engineer. She learns new technologies very
              quickly, works very fast, yet never compromises the quality of her
              work. She has keen problem-solving skills and demonstrates
              exceptional leadership.
            </p>

            <p>
              Tiffany is a perfectionist and is mindful of maintaining the
              integrity of a design throughout the entire development process.
              She understands and follows UX best practices and usability
              standards. She is a fervent believer in Web Standards and
              implementing Standards Compliant code. She keeps an eye on the
              latest changes in the industry to ensure her skillset is fresh and
              current.
            </p>
            <p>
              {' '}
              Tiffany works with integrity, sets the bar high for herself and
              inspires her teammates to do the same. She will take on
              challenges, find a way to make the impossible work, and make it
              work very well. She is an excellent team player who always brings
              great ideas to the table and knows how to get things done
              efficiently. Tiffany Is a wonderful asset to any team!
            </p>
          </Quote>
        </article>
        <article>
          <img
            alt="Panayiotes (PK) Kakleas"
            src="/images/people/panayiotes-pk-kakleas.jpg"
          />
          <header>
            <H2>Senior Node.js Engineer at SKECHERS</H2>
            <H3>
              <a
                href="http://www.linkedin.com/in/panayiotes-pk-kakleas-b7152466"
                target="_blank"
                rel="noopener noreferrer"
              >
                Panayiotes (PK) Kakleas
              </a>
            </H3>
          </header>
          <Quote>
            <p>
              {`Tiffany was my manager at Skechers when I first joined. She
              really impressed me with her vast knowledge of the Skechers
              architecture and how quickly she was able to prototype large
              front end systems. As a leader, Tiffany demonstrated time and
              again how she can take charge of situations and break down
              complex problems for her team to solve. She understood the
              nuances of each team member and was able to delegate
              responsibilities that played to their strengths. Every person I
              work with speaks admirably of all that she did at Skechers and I
              would happily recommend Tiffany to be a part of any software
              development team. Her natural energy, curiosity, and passion for
              coding can help push any project forward.`}
            </p>
          </Quote>
        </article>
        <article>
          <img alt="Binh Nguyen" src="/images/people/binh-nguyen.jpg" />
          <header>
            <H2>Software Engineer at Endpoint</H2>
            <H3>
              <a
                href="http://www.linkedin.com/in/binhxnguyen"
                target="_blank"
                rel="noopener noreferrer"
              >
                Binh Nguyen
              </a>
            </H3>
          </header>
          <Quote>
            <p>
              {`In my entire engineering career, Tiffany was the best person to
               work with, especially as a tech lead. She's one of those people
               you can count on to show up curious, driven, and excited to push
               for the best results. She has an innate ability to scope out
               projects and identify edge cases for features and bugs that can
               cause multiple round trips. Of all of her skills, she has the
               ability to get work done no matter the difficulty of the
               project. I'm glad to call her my manager, mentor, and especially
               a good friend. She will definitely fit well with any team she's
               brought on with.`}
            </p>
          </Quote>
        </article>
        <article>
          <img alt="Mark Beeson" src="/images/people/mark-beeson.jpg" />
          <header>
            <H2>Director, Web Services at SKECHERS</H2>
            <H3>
              <a
                href="http://www.linkedin.com/in/mark242"
                target="_blank"
                rel="noopener noreferrer"
              >
                Mark Beeson
              </a>
            </H3>
          </header>
          <Quote>
            <p>
              {`When Tiffany joined Skechers, she was already a really
              accomplished client-side engineer. She has consistently shown
              that there is no code that she can't immediately pick up, and
              the rate at which she learns and absorbs information is just a
              little bit frightening. When the web department grew to such a
              size that we needed to divide up into teams, Tiffany was the
              natural fit to lead the client-side engineering team, and time
              after time she will rise to any challenge put in front of her.`}
            </p>
            <p>
              {`Whether it's discussing future client-side architecture,
              encouraging and working with her engineering team, or just
              looking back at old code and doing the old "what was I thinking"
              jokes that all the best engineers seem to make, Tiffany is an
              incredible manager, an incredible engineer, and an incredible
              person. She is one of those rare people who makes everyone around
              her better, and I couldn't be happier that she joined the team.`}
            </p>
          </Quote>
        </article>
        <article>
          <img alt="Kaela Nichols" src="/images/people/kaela-nichols.jpg" />
          <header>
            <H2>Web Developer at SKECHERS</H2>
            <H3>
              <a
                href="http://www.linkedin.com/in/kaelanichols"
                target="_blank"
                rel="noopener noreferrer"
              >
                Kaela Nichols
              </a>
            </H3>
          </header>
          <Quote>
            <p>
              I worked with Tiffany at SKECHERS, and she is one of the most
              dedicated teammates I have had the opportunity to work with in my
              career. She is focussed and will always find the solution to a
              problem. An excellent JavaScript developer, who pretty much owns
              Angular, she is constantly striving to learn more. Every week, she
              was reading a new book on code, taking a course on pluralsight, or
              getting into a new podcast. Any company would be lucky to have her
              as a member of their team.
            </p>
          </Quote>
        </article>
        <article>
          <img alt="David Tang" src="/images/people/david-tang.jpg" />
          <header>
            <H2>Senior JavaScript Developer at SKECHERS</H2>
            <H3>
              <a
                href="http://www.linkedin.com/in/dtang85"
                target="_blank"
                rel="noopener noreferrer"
              >
                David Tang
              </a>
            </H3>
          </header>
          <Quote>
            <p>
              {`It was a real pleasure working with Tiffany at Skechers. She
              was a great teammate to have and worked well with everyone. I
              loved that she is an open minded developer and her passion for
              learning and following best practices. Every couple weeks I'd see
              a new book on her desk as she was keeping up to date in this fast
              paced industry. Tiffany will always get the job done regardless
              of what roadblocks are in front of the task at hand. She is a
              dedicated employee and will spend the extra time outside of work
              to ensure things are done correctly. She can hop into an
              existing, unfamiliar codebase and ramp up quickly even if there
              are technologies she has never worked with before. Overall she is
              just a great person to be around and work with, and I hope I get
              to work with her again in the future.`}
            </p>
          </Quote>
        </article>
        <article>
          <img alt="Justin Klingman" src="/images/people/justin-klingman.jpg" />
          <header>
            <H2>Manager, Web Software Development at Beacon Technologies</H2>
            <H3>
              <a
                href="http://www.linkedin.com/in/jklingman"
                target="_blank"
                rel="noopener noreferrer"
              >
                Justin Klingman
              </a>
            </H3>
          </header>
          <Quote>
            <p>
              I have had the pleasure of working with, and learning from,
              Tiffany for almost five years. I have never worked with someone
              who has as much passion for web design and development as Tiffany
              does. She wants to learn and master everything, and conquerors any
              challenge we give her.
            </p>
            <p>
              Tiffany wants to make the web better, as well as those around her.
              She values good development standards, and wants to do everything
              the right way. She has driven most of the development standards at
              Beacon, and implemented ways to make them available to all
              developers using a knowledge base, and is a frequent contributor
              to it.
            </p>
            <p>
              {`Her work on projects has been exemplary. We can give her any
              task, and we know it will be done and done right, whether it's
              responsive design, HTML5, CSS3, jQuery, XML, XSLT, Velocity, or
              Wordpress, to name a few. She can size up a request or problem and
              come up with solutions that are in the best interest of the end
              user. She has also implemented very creative ways to ensure that
              multiple developers can work on development tasks without
              interfering with each other.`}
            </p>
          </Quote>
        </article>
        <article>
          <img alt="Austin Fadely" src="/images/people/austin-fadely.jpg" />
          <header>
            <H2>Project Manager at Beacon Technologies</H2>
            <H3>
              <a
                href="http://www.linkedin.com/in/austinfadely"
                target="_blank"
                rel="noopener noreferrer"
              >
                Austin Fadely
              </a>
            </H3>
          </header>
          <Quote>
            <p>
              {`I rely heavily on Tiffany for large projects. As the lead web
              developer, she has continued to write elegant, well-executed code
              in HTML5, CSS3, and Javascript. She is instrumental in developing
              the company's best practices for web development, including
              responsive web design.`}
            </p>
            <p>
              In addition to programming, Tiffany has also been responsible for
              managing and leading other web developers to ensure code
              consistency and version control on some of our larger sites. She
              also frequently reviews code for quality assurance and provides
              invaluable feedback for the team.
            </p>
          </Quote>
        </article>
        <article>
          <img alt="Annette Fowler" src="/images/people/annette-fowler.jpg" />
          <header>
            <H2>Senior Project Manager at Beacon Technologies</H2>
            <H3>
              <a
                href="http://www.linkedin.com/pub/annette-fowler/5/95a/952"
                target="_blank"
                rel="noopener noreferrer"
              >
                Annette Fowler
              </a>
            </H3>
          </header>
          <Quote>
            <p>
              {`I've had the great pleasure of working with Tiffany on many
              website projects. She is an outstanding web developer, but perhaps
              even more importantly, she's a great team member and "thinker".
              Rather than blindly completing tasks, Tiffany regularly recommends
              improvements to both processes and standards.`}
            </p>
            <p>
              In addition, she has been the leading force behind the completion
              of a comprehensive knowledge-base, which will benefit the company
              for years to come. I hope to have many more positive experiences
              working with this exceptional talent.
            </p>
          </Quote>
        </article>
        <article>
          <img alt="Jessamyn Bean" src="/images/people/jessamyn-bean.jpg" />
          <header>
            <H2>Vice President at Get You Found Online Marketing</H2>
            <H3>
              <a
                href="http://www.linkedin.com/in/jessamynbean"
                target="_blank"
                rel="noopener noreferrer"
              >
                Jessamyn Bean
              </a>
            </H3>
          </header>
          <Quote>
            <p>
              I have worked with Tiffany at two different companies (Inter-tech
              &amp; Get You Found), and she was an asset at each establishment.
              As a web developer, she always included something creative or
              inventive that the project manager or client had not thought of.
              Tiffany is also extremely FAST. She picks up on new things very
              quickly and can implement code rapidly for a variety of project
              types including e-commerce solutions, database driven websites,
              and other complicated websites. She can also do flash animation,
              graphic design, and occasionally dabbles in creating her own apps
              for Facebook and other platforms just for fun. I definitely
              recommend Tiffany for any web development project.
            </p>
          </Quote>
        </article>
      </section>
    </Page>
  );
};

export default Reviews;
