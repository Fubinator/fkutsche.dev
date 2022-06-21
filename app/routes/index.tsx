import Pic from "../assets/me.webp";

export default function Index() {
  return (
    <div className="bg-gray-900 h-full flex flex-col justify-between">
      <header className="mx-6 md:flex justify-center items-center pt-12 md:pt-0 h-2/3">
        <div className="md:border-r-4 md:border-gray-100 flex justify-center mb-12 md:mb-0">
          <img
            width="150"
            height="150"
            src={Pic}
            alt="Profile"
            className="rounded-full border-4 border-gray-100 md:mr-10 p-1"
          />
        </div>
        <div className="flex flex-col md:ml-10">
          <h1 className="text-6xl bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-violet-500">
            Hi, I'm Fabian
          </h1>
          <span className="text-gray-100 text-lg mt-2">Software Developer</span>

          <div className="flex space-x-4 mt-4">
            <a
              href="https://www.linkedin.com/in/fabian-kutsche-9a77261ab/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <svg
                role="img"
                viewBox="0 0 24 24"
                className="w-5 h-5 fill-gray-400 hover:fill-gray-100"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>LinkedIn</title>
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a
              href="https://github.com/Fubinator"
              target="_blank"
              rel="noreferrer noopener"
            >
              <svg
                role="img"
                viewBox="0 0 24 24"
                className="w-5 h-5 fill-gray-400 hover:fill-gray-100"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>GitHub</title>
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
            </a>
            <a href="mailto:kutschefabian@gmail.com">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                width="256"
                height="256"
                viewBox="0 0 256 256"
                className="w-5 h-5 fill-gray-400 hover:fill-gray-100"
              >
                <title>E-Mail</title>
                <g transform="translate(128 128) scale(0.72 0.72)">
                  <g transform="translate(-175.05 -175.05000000000004) scale(3.89 3.89)">
                    <path
                      d="M 45 51.815 l 45 -33.87 v -1.967 c 0 -2.03 -1.646 -3.676 -3.676 -3.676 H 3.676 C 1.646 12.302 0 13.948 0 15.978 v 1.967 L 45 51.815 z"
                      transform=" matrix(1 0 0 1 0 0) "
                      strokeLinecap="round"
                    />
                    <path
                      d="M 47.405 60.019 c -0.712 0.536 -1.559 0.804 -2.405 0.804 s -1.693 -0.268 -2.405 -0.804 L 0 27.958 v 46.064 c 0 2.03 1.646 3.676 3.676 3.676 h 82.648 c 2.03 0 3.676 -1.646 3.676 -3.676 V 27.958 L 47.405 60.019 z"
                      transform=" matrix(1 0 0 1 0 0) "
                      strokeLinecap="round"
                    />
                  </g>
                </g>
              </svg>
            </a>
            <a
              href="https://twitter.com/FKutsche"
              rel="noreferrer noopener"
              target="_blank"
            >
              <svg
                role="img"
                viewBox="0 0 24 24"
                className="w-5 h-5 fill-gray-400 hover:fill-gray-100"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Twitter</title>
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
            </a>
          </div>
        </div>
      </header>
      <footer className="text-gray-300 text-sm flex justify-center mb-8">
        &copy; Fabian Kutsche {new Date().getFullYear()}
      </footer>
    </div>
  );
}
