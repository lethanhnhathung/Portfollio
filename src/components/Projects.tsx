"use client";

import { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { Skeleton } from "./ui/skeleton";

interface Repository {
  id: number;
  name: string;
  description: string;
  html_url: string;
  homepage: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
  topics: string[];
}

export default function Projects() {
  const username = "lethanhnhathung";
  const [repos, setRepos] = useState<Repository[]>([]);
  const [user, setUser] = useState<{
    avatar_url: string;
    html_url: string;
  } | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const [reposRes, userRes] = await Promise.all([
          fetch(
            `https://api.github.com/users/${username}/repos?sort=updated&per_page=6`
          ),
          fetch(`https://api.github.com/users/${username}`),
        ]);

        if (!reposRes.ok || !userRes.ok) {
          throw new Error("Failed to fetch data from GitHub");
        }

        const reposData = await reposRes.json();
        const userData = await userRes.json();

        setRepos(reposData);
        setUser({
          avatar_url: userData.avatar_url,
          html_url: userData.html_url,
        });
        setError(null);
      } catch (err) {
        console.error("Error fetching GitHub data:", err);
        setError("Could not load GitHub data. Please try again later.");
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [username]);

  const fallbackRepos: Repository[] = [
    {
      id: 1,
      name: "Project One",
      description: "A modern web application built with React and TypeScript",
      html_url: "https://github.com/lethanhnhathung/project-one",
      homepage: "",
      stargazers_count: 12,
      forks_count: 5,
      language: "TypeScript",
      topics: ["react", "typescript", "web"],
    },
    {
      id: 2,
      name: "Project Two",
      description: "Mobile app built with React Native",
      html_url: "https://github.com/lethanhnhathung/project-two",
      homepage: "",
      stargazers_count: 8,
      forks_count: 2,
      language: "JavaScript",
      topics: ["react-native", "mobile", "app"],
    },
    {
      id: 3,
      name: "Project Three",
      description: "Backend API built with Node.js and Express",
      html_url: "https://github.com/lethanhnhathung/project-three",
      homepage: "",
      stargazers_count: 15,
      forks_count: 3,
      language: "JavaScript",
      topics: ["node", "express", "api"],
    },
    {
      id: 4,
      name: "Project Four",
      description: "Data visualization dashboard",
      html_url: "https://github.com/lethanhnhathung/project-four",
      homepage: "",
      stargazers_count: 6,
      forks_count: 1,
      language: "JavaScript",
      topics: ["d3", "visualization", "dashboard"],
    },
    {
      id: 5,
      name: "Project Five",
      description: "Machine learning model for image classification",
      html_url: "https://github.com/lethanhnhathung/project-five",
      homepage: "",
      stargazers_count: 20,
      forks_count: 7,
      language: "Python",
      topics: ["machine-learning", "tensorflow", "image-processing"],
    },
    {
      id: 6,
      name: "Project Six",
      description: "CLI tool for developers",
      html_url: "https://github.com/lethanhnhathung/project-six",
      homepage: "",
      stargazers_count: 10,
      forks_count: 2,
      language: "Go",
      topics: ["cli", "developer-tools", "productivity"],
    },
  ];

  const displayRepos = repos.length > 0 ? repos : fallbackRepos;

  return (
    <section id="projects" className="w-full py-12 md:py-24 bg-background/60">
      <div className="container px-4 md:px-6 mx-auto max-w-6xl">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          {user && (
            <a href={user.html_url} target="_blank" rel="noopener noreferrer">
              <img
                src={user.avatar_url}
                alt="GitHub Avatar"
                className="w-24 h-24 rounded-full border border-primary shadow-md hover:shadow-lg transition"
              />
            </a>
          )}
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
              Projects
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              My GitHub Projects
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Explore my latest work and contributions. These projects showcase
              my skills and experience.
            </p>
          </div>
        </div>

        <div className="mt-10">
          {loading ? (
            <div className="flex justify-center">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl">
                {[...Array(6)].map((_, i) => (
                  <Card key={i} className="overflow-hidden">
                    <CardHeader className="p-4">
                      <Skeleton className="h-6 w-3/4" />
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <Skeleton className="h-20 w-full" />
                    </CardContent>
                    <CardFooter className="p-4 flex justify-between">
                      <Skeleton className="h-4 w-1/4" />
                      <Skeleton className="h-4 w-1/4" />
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>
          ) : error ? (
            <div className="w-full py-8 text-center">
              <p className="text-muted-foreground">{error}</p>
              <Button
                variant="outline"
                className="mt-4"
                onClick={() => window.location.reload()}
              >
                Try Again
              </Button>
            </div>
          ) : (
            <div className="flex justify-center">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl">
                {displayRepos.map((repo) => (
                  <Card
                    key={repo.id}
                    className="overflow-hidden flex flex-col h-full border border-primary/10 transition-all duration-200 hover:shadow-md hover:border-primary/30"
                  >
                    <CardHeader className="p-4">
                      <CardTitle className="text-xl">{repo.name}</CardTitle>
                    </CardHeader>
                    <CardContent className="p-4 pt-0 flex-grow">
                      <p className="text-muted-foreground line-clamp-3">
                        {repo.description || "No description available"}
                      </p>
                      {repo.language && (
                        <div className="mt-4 flex items-center">
                          <div className="h-3 w-3 rounded-full bg-primary mr-2"></div>
                          <span className="text-sm">{repo.language}</span>
                        </div>
                      )}
                      {repo.topics && repo.topics.length > 0 && (
                        <div className="mt-2 flex flex-wrap gap-2">
                          {repo.topics.slice(0, 3).map((topic) => (
                            <span
                              key={topic}
                              className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors bg-secondary text-secondary-foreground hover:bg-secondary/80"
                            >
                              {topic}
                            </span>
                          ))}
                        </div>
                      )}
                    </CardContent>
                    <CardFooter className="p-4 flex justify-between items-center border-t">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center">
                          ⭐{" "}
                          <span className="ml-1 text-sm">
                            {repo.stargazers_count}
                          </span>
                        </div>
                        <div className="flex items-center">
                          🍴{" "}
                          <span className="ml-1 text-sm">
                            {repo.forks_count}
                          </span>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" asChild>
                          <a
                            href={repo.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Code
                          </a>
                        </Button>
                        {repo.homepage && (
                          <Button variant="outline" size="sm" asChild>
                            <a
                              href={repo.homepage}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Demo
                            </a>
                          </Button>
                        )}
                      </div>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>
          )}

          <div className="mt-10 text-center">
            <Button variant="outline" asChild>
              <a
                href={`https://github.com/${username}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                View All Projects on GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
