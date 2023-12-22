import me from "../assets/me.png";
import Section from "../components/Section";

const TEXT = "I'M EVANDRO VIEGAS"
export default function Me() {
  return (
    <Section
      id="me"
      backgroundClassName="relative"
      className="flex md:flex-row flex-col md:gap-20 gap-4 md:justify-between justify-center items-center"
    >
      <img src={me} className="rounded-full w-[50vw] max-w-[400px]  " />
      <div className="flex flex-col ">
        <span className="text-xl">HELLO,</span>
        <div className="relative md:text-6xl text-5xl font-black w-fit ">
          <span className="opacity-0">{TEXT}</span>
          <div className="absolute bg-primary h-1/2 inset-x-0 -translate-y-full" />
          <span className="w-full left-0 bottom-0 absolute">{TEXT}</span>
        </div>
        <p className="md:text-xl mt-2 text-gray-1">
          I am a professional full-stack web developer, I specialize in
          creating all kind of websites: from simple and modern to complex and
          optimized websites. I have more than 6 years of exprience
        </p>
      </div>
    </Section>
  );
}
