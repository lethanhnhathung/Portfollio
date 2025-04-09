import { Button } from "./ui/button"

export default function Contact() {
  return (
    <section id="contact" className="w-full py-12 md:py-24 bg-background/60">
      <div className="container px-4 md:px-6 mx-auto max-w-6xl">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Get In Touch</h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Interested in working together? Feel free to reach out to me.
            </p>
          </div>

          <div className="w-full max-w-sm space-y-2">
            <Button
              className="w-full transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-white hover:text-black"
              asChild
            >
              <a
                href="mailto:your.email@example.com"
                className="flex items-center justify-center gap-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
                <span className="text-base font-medium">Contact Me</span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
