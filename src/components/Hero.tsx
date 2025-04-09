export default function Hero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-background to-secondary/20">
      <div className="container px-4 md:px-6 mx-auto max-w-6xl">
        <div className="flex flex-col items-center gap-8 text-center">
          {/* Phần tiêu đề và mô tả */}
          <div className="space-y-4 max-w-[800px]">
            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-foreground">
              Nhat Hung
            </h1>
            <p className="max-w-[600px] text-muted-foreground md:text-xl mx-auto">
              Software Developer & Tech Enthusiast. Building innovative solutions with modern technologies.
              Passionate about creating clean, efficient, and user-friendly applications.
            </p>

            {/* Các nút */}
            <div className="flex flex-wrap justify-center gap-4">
              {/* View Projects */}
              <a
                href="#projects"
                className="flex flex-col items-center justify-center w-[120px] h-[100px] rounded-lg bg-primary text-white hover:bg-primary/80 hover:scale-105 transition-all shadow-md"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mb-1"
                >
                  <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
                </svg>
                <span className="text-sm font-medium">View Projects</span>
              </a>

              {/* About Me */}
              <a
                href="#about"
                className="flex flex-col items-center justify-center w-[120px] h-[100px] rounded-lg border border-primary/20 bg-background hover:bg-secondary hover:scale-105 transition-all shadow-sm"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mb-1"
                >
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
                <span className="text-sm font-medium">About Me</span>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center w-[120px] h-[100px] rounded-lg border border-primary/20 bg-background hover:bg-secondary hover:scale-105 transition-all shadow-sm"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mb-1"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                  <path d="M9 18c-4.51 2-5-2-7-2"></path>
                </svg>
                <span className="text-sm font-medium">GitHub</span>
              </a>
            </div>
          </div>

          {/* Ảnh động có khung lớn và viền phát sáng */}
          <div className="w-full flex justify-center">
            <div className="w-full max-w-[500px] aspect-video rounded-2xl bg-background/50 shadow-xl ring-4 ring-primary/50 transition-all duration-300 hover:scale-105 hover:ring-primary/80">
              <img
                src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExa3BkNDNhem13cnlxdWRiNjBudHVxdjdpaDY0NXE5eWxubHlwaGJoZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/AalaRo53kBwlgTzvKS/giphy.gif"
                alt="Animated GIF"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
