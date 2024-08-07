"use client";
import React,{useState} from "react";
import { Label } from "@/components/label";
import { Input } from "@/components/input";
import { cn } from "@/utils/cn";
import { HeroHighlight } from "@/components/hero-highlight";
import { MeteorsDemo } from "@/components/popup";

export default function SignupFormDemo() {
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [first, setFirst] = useState('');
  const [second, setSecond] = useState('');
  const [email, setEmail] = useState('');
  const [designation, setDesignation] = useState('');
  const [feedback, setFeedback] = useState('');
  const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

  if (first == "" && second=="" && email == "") {
    setTitle('Fields are empty');
    setDescription('Please fill up the fields to give the feedback');
    setLoading(true);
    return false;
    }
    setTitle('Sending...');
    setDescription('Please wait a while for server to process your feedback');
    setLoading(true);

  await fetch('/api/send', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
  first: first,
  second: second,
  email: email,
  designation: designation,
  feedback: feedback,
  }),
  }).then((res) => res.json())
  .then((data) => {
    if (data) {
  setTitle('Feedback sended')
  setDescription(`Thank you for your interest ${first}! We will get back to you soon!`);
    if (!loading) {
      setLoading(true); 
    }
  setFirst("");
  setSecond("");
  setFeedback("");
  setDesignation("");
  setEmail("");
    } else {
        setTitle('Operation Failed')
  setDescription(`The feedback blocked by our server side there might be some issue during transmission of feedback. I appreciate your interest, please feedback again to successfully transmit your message to me`);
    if (!loading) {
      setLoading(true); 
    }
  }
  })
  .catch((err) => {
  setTitle('Error Occured')
  setDescription(`Ooops! unfortunately some error has occurred during the feedback processing.`);
    if (!loading) {
      setLoading(true); 
    }
  });
  return true;
};
  return (
    <div className="w-screen min-h-screen h-auto  ">
      <HeroHighlight>
        <div className="max-w-md w-full h-auto mx-auto rounded-sm md:rounded-2xl p-7 md:p-8 shadow-input bg-black">
          {loading?<MeteorsDemo setLoading={setLoading} title={title} description={description}/>:''}
      <h2 className=" text-xl inred text-neutral-200 flex flex-row items-center justify-center text-center">
        Thanks for visiting my portfolio
      </h2>
      <p className="qiukyu text-base max-w-sm mt-2 text-neutral-300 flex flex-row items-center justify-center text-center">
        You can give me your valuable feedback from through this form
      </p>

      <form className="my-5 inred font-thin" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="firstname">First name</Label>
                <Input
                  id="firstname"
                  placeholder="Samrat"
                  type="text"
                  value={first}
                  onChange={(e)=>setFirst(e.target.value)}
                />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastname">Last name</Label>
                <Input
                  id="lastname"
                  placeholder="Das"
                  type="text"
                  value={second}
                  onChange={(e)=>setSecond(e.target.value)}
                />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
              <Input id="email"
                placeholder="colddsam@gmail.com"
                type="email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
              />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="designation">Designation</Label>
              <Input
                id="designation"
                placeholder="Your designation"
                type="text"
                value={designation}
            onChange={(e)=>setDesignation(e.target.value)}
                />
        </LabelInputContainer>
        <LabelInputContainer className="mb-8">
          <Label htmlFor="feedback">Your Feedback</Label>
          <Input
            id="feedback"
            placeholder="Your valuable feedback"
                type="text"
                value={feedback}
            onChange={(e)=>setFeedback(e.target.value)}
          />
        </LabelInputContainer>

        <button
          className="bg-gradient-to-br relative group/btn from-zinc-900 to-zinc-900  block bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
          Submit &rarr;
          <BottomGradient />
        </button>

        
      </form>
    </div>
      </HeroHighlight>

    </div>
    
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
