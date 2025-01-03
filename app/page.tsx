import Link from 'next/link';

export default function Home() {
  return (
    <div className='flex flex-col gap-4'>
      <div className='flex flex-col sm:flex-row bg-[white] gap-2 sm:gap-0 border-b-4 border-[#2298BD] text-black sm:items-center py-4 sm:py-2 pl-3 px-2 sm:px-5 md:px-20 font-bold sm:text-nowrap'>
        <p>✨ Welcome! Get to know me professionally</p>
        <div className='flex-grow flex items-center sm:justify-end'>
          <div className='flex items-center gap-2'>
            <p>1+ years of experience</p>
            {[
              { image: 'github (1)', link: 'github.com/sadiq-i-umar' },
              {
                image: 'linkedin-original',
                link: 'linkedin.com/in/sadiq-i-umar',
              },
            ].map((social, index) => (
              <Link href={'https://' + social.link} key={index} target='_blank'>
                <img
                  src={'/icons/' + social.image + '.svg'}
                  width={24}
                  height={24}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className='grid grid-cols-4 font-bold my-10 sm:my-20 px-10 sm:px-20 items-center gap-10'>
        <p className='text-6xl sm:text-7xl col-span-4 sm:col-span-1'>
          Sadiq Ibrahim Umar
          <span className=' underline text-white decoration-black underline-offset-[0] font-black'>
            {'__'}
          </span>
        </p>
        <div className='flex flex-col gap-8 sm:gap-4 col-span-4 sm:col-span-3 sm:pl-40 text-5xl'>
          <p>💻 Software Engineer</p>
          <div className='flex justify-center'>
            <img
              src='/icons/code (1).svg'
              className='w-[100px] h-[80px]  sm:w-[184px] sm:h-[150px]'
              width={184}
              height={150}
            />
          </div>
          <p className='text-center sm:text-right'>🌐 Web Developer</p>
        </div>
      </div>

      <div className='px-10 mt-6 sm:mt-0 sm:px-20 flex flex-col gap-8 '>
        <p className='text-4xl font-bold text-[#2298BD] text-center sm:text-start'>
          Technologies
        </p>
        <div className='flex items-center gap-10 justify-center sm:justify-evenly flex-wrap'>
          {[
            'nextjs',
            'react',
            'tailwind-css',
            'typescript-icon',
            'javascript-js',
            'html-5',
            'css-3',
            'laravel',
            'file-type-php',
          ].map((image, index) => (
            <img
              key={index}
              src={'/icons/' + image + '.svg'}
              {...(index === 0
                ? { width: 120, height: 120 }
                : index === 8
                ? { width: 120, height: 120 }
                : { width: 80, height: 80 })}
              className={`${index === 8 ? 'mt-[-30px] sm:mt-0' : ''}`}
            />
          ))}
        </div>
      </div>

      <div className='flex flex-col gap-20'>
        <p className='font-bold text-4xl text-center mt-20'>
          Highlighted Projects
        </p>
        <div className='px-10 md:px-20 flex flex-col gap-20'>
          {[
            {
              screenshot: 'startup-nigeria.png',
              name: 'Startup Nigeria',
              tools: ['Next.js', 'React', 'TypeScript', 'Material UI'],
              description:
                'The Startup Nigeria portal is an initiative of the Nigerian government to provide startups with a platform where they can expose themselves to opportunities in the startup ecosystem. It is a mutli user application with not only startups but also venture capitalists, angel investors, and A.I.Is (Accelerators, Innovation Hubs, and Incubators)',
              color: '#007A27',
              imageFirst: false,
              link: 'startup.gov.ng',
            },
            {
              screenshot: 'guards-polo-club.png',
              name: 'Abuja Guards Polo Club',
              tools: ['PHP', 'Laravel', 'HTML', 'Tailwind CSS'],
              description: 'The member portal for Abuja Guards Polo Club..',
              color: '#394911',
              imageFirst: true,
              link: 'member.abujaguardspolo.com/login',
            },
            {
              screenshot: 'nibc.png',
              name: 'Nigeria India Business Council',
              tools: ['WordPress', 'Elementor'],
              description:
                'The project involved the creation of a website for the Nigeria India Business Council using modern and interactive elements.',
              color: '#00A650',
              imageFirst: false,
              link: 'nibc.ng',
            },
            {
              screenshot: 'leadguards.png',
              name: 'Lead Guards Security',
              tools: ['PHP', 'HTML', 'CSS'],
              description:
                'Website for Lead Guards Limited. The company provides security services to individuals and organizations.',
              color: '#D42300',
              imageFirst: false,
              link: 'leadguards.ng',
            },
            {
              screenshot: 'portfolio.png',
              name: 'Portfolio Site',
              tools: ['Next JS', 'React', 'TypeScript', 'Tailwind CSS'],
              description:
                'Created to showcase my professional skills and experience. This is the website you are currently viewing.',
              color: '#2298BD',
              imageFirst: false,
              link: 'sadiqumar.vercel.app',
            },
          ].map((project, index) => (
            <div
              key={index}
              className={`flex flex-col lg:flex-row gap-10 lg:gap-20`}
            >
              <div
                className={`w-full h-[357px] border ${project.imageFirst}`}
                style={{
                  backgroundImage: `${`url("/images/screenshots/${project.screenshot}")`}`,
                  backgroundSize: 'cover',
                  borderRadius: '30px',
                  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                }}
              ></div>
              <div className='lg:w-[50%] flex flex-col gap-4 md:mx-auto md:items-center lg:mx-0 lg:items-start'>
                <p
                  className={`text-4xl font-bold`}
                  style={{ color: project.color }}
                >
                  {project.name}
                </p>
                <p className='text-2xl font-bold'>
                  {typeof project.tools !== 'string' &&
                    project.tools.join(' | ')}
                </p>
                <p className='text-1xl'>{project.description}</p>
                {index !== 4 && (
                  <div className='flex justify-center'>
                    <Link href={'https://' + project.link} target='_blank'>
                      <button
                        style={{ backgroundColor: project.color }}
                        className={`w-fit text-white rounded-xl text-1xl py-3 px-6 font-bold`}
                      >
                        View Project
                      </button>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='flex justify-center'>
        <div className='flex flex-col lg:flex-row items-center gap-16 md:gap-20 lg:gap-36 my-40 mx-20'>
          <div className='w-[300px] h-[52px]  sm:w-[504px] sm:h-[103px] mt-[-30px]'>
            <img src='/icons/nile-university.svg' width={504} height={103} />
          </div>
          <div className='flex flex-col items-center sm:items-start gap-2 text-3xl sm:text-4xl font-bold w-fit'>
            <p className='text-[#274193] text-center md:text-start'>
              Bsc. Software Engineering
            </p>
            <p>2018 - 2022</p>
            <p className='text-2xl font-normal'>First Class Honors</p>
          </div>
        </div>
      </div>

      <div className='bg-[#F8F9FF] grid grid-cols-2 px-2 sm:px-[150px] py-20 items-center gap-10 sm:gap-5 mb-[-15px]'>
        <div
          className='col-span-2 lg:col-span-1 place-self-center sm:mx-0 w-60 h-60 sm:w-120 sm:h-129 md:w-[370px] md:h-[374px]'
          style={{
            borderRadius: '50%',
            backgroundImage: 'url("/profile/headshot.png")',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            border: '10px solid #274193',
          }}
        ></div>
        <div className='col-span-2 lg:col-span-1 flex flex-col items-center sm:items-start gap-6'>
          <p className='text-5xl sm:text-7xl font-bold text-center sm:text-start'>
            Let{"'"}s get in touch
          </p>
          <p className='text-2xl sm:text-3xl flex gap-4'>
            Abuja, Nigeria{' '}
            <img src='/icons/nigeria.svg' width={65} height={40} />{' '}
          </p>
          <p className='text-2xl sm:text-3xl mx-2 sm:mx-0 break-all'>
            umarsadiqibrahim@gmail.com
          </p>
          <p className='text-2xl sm:text-3xl'>+234 70 6924 7868</p>
        </div>
      </div>

      <div className='border-t-4 border-[#2298BD] flex flex-col md:flex-row md:items-center justify-center py-4 font-bold text-center px-20 gap-2'>
        <p>
          Sadiq Ibrahim Umar &copy; 2025{' '}
          <span className='hidden md:inline'>|</span>{' '}
        </p>
        {[
          {
            text: '🔗Access the code on GitHub',
            link: 'https://github.com/sadiq-i-umar/portfolio',
          },
          {
            text: '📄My Resume',
            link: 'https://drive.google.com/file/d/1covwa-WM2vs2zpldo88lEfxJF1XdLh-A/view?usp=drive_link',
          },
        ].map((item, index) => (
          <p
            {...(index === 0 && { className: 'mt-[-4px] sm:mt-0' })}
            key={index}
          >
            <a
              href={item.link}
              target='_blank'
              className='underline underline-offset-4'
            >
              {item.text}
            </a>
            {index !== 1 && <span className='hidden md:inline'> |</span>}
          </p>
        ))}
      </div>
    </div>
  );
}
