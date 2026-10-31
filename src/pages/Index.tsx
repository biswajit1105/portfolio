image = "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80"
tags = { ["Vue.js", "D3.js", "Express", "PostgreSQL"]}
demoUrl = "#"
githubUrl = "#"
    />
          <ProjectCard
            title="Blockchain Voting System"
            description="A secure, transparent voting platform built on blockchain technology for organizational elections."
            image="https://images.unsplash.com/photo-1639762681057-408e52192e55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80"
            tags={["Solidity", "Ethereum", "Web3.js", "React"]}
            demoUrl="#"
            githubUrl="#"
          />
          <ProjectCard
            title="Language Learning App"
            description="A mobile application for language learning with speech recognition and adaptive learning algorithms."
            image="https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=771&q=80"
            tags={["React Native", "Firebase", "TensorFlow Lite"]}
            demoUrl="#"
            githubUrl="#"
          />
          <ProjectCard
            title="Smart Home IoT Hub"
            description="A central management system for smart home devices with voice control and automation rules."
            image="https://images.unsplash.com/photo-1558002038-1055e2dae2c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            tags={["Node.js", "MQTT", "React", "Raspberry Pi"]}
            demoUrl="#"
            githubUrl="#"
          />
        </div >
      </Section >

    {/* Contact Section */ }
    < Section
id = "contact"
title = "Contact Me"
subtitle = "Let's discuss how I can contribute to your project or team."
className = "bg-muted/50"
    >
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="reveal">
            <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
            <p className="text-muted-foreground mb-6">
                I'm currently available for freelance work or full-time positions. If you have a project that needs expertise or are looking to add a developer to your team, please feel free to reach out.
            </p>
            <div className="space-y-4">
                <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                        <Mail size={20} className="text-primary" />
                    </div>
                    <div>
                        <h4 className="font-medium">Email</h4>
                        <a href="mailto:biswajitmandal012345@gmail.com" className="text-primary hover:underline">
                            biswajitmandal012345@gmail.com
                        </a>
                    </div>
                </div>
                <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                        <Linkedin size={20} className="text-primary" />
                    </div>
                    <div>
                        <h4 className="font-medium">LinkedIn</h4>
                        <a
                            href="https://www.linkedin.com/in/biswajit-mandal-6659111aa/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:underline"
                        >
                            linkedin.com/biswajit-mandal
                        </a>
                    </div>
                </div>
                <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                        <Github size={20} className="text-primary" />
                    </div>
                    <div>
                        <h4 className="font-medium">GitHub</h4>
                        <a
                            href="https://github.com/biswajit1105"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:underline"
                        >
                            github.com/biswajit1105
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div className="reveal delay-200">
            <h3 className="text-xl font-semibold mb-4">Send a Message</h3>
            <ContactForm />
        </div>
    </div>
      </Section >

    <Footer />
    </>
  );
};

export default Index;
