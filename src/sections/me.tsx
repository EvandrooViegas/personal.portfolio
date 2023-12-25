import me from "../assets/me.png";
import Animate from "../components/Animate";
import Section from "../components/Section";

const TEXT = "I'M EVANDRO VIEGAS"
export default function Me() {
  return (
    <Section
      id="me"
      backgroundClassName="relative bg-gradient-to-b from-zinc-800 to-zinc-900 "
      className="flex md:flex-row flex-col md:gap-20 gap-4 md:justify-between justify-center items-center pt-24 md:pt-0"
    >
      <Animate element="img" src={me} className="rounded-full w-[50vw] max-w-[400px] border p-1 border-white/20"  animate={{ x: [-100, 0], opacity: [0.5, 1], transition: { duration: 1 } }} />
      
      <div className="flex flex-col ">
        <Animate animate={{ x: [-100, 0], opacity: [0, 1], transition: { duration: 1 } }} element="span" className="text-xl">HELLO</Animate>
        <Animate animate={{ x: [100, 0], opacity: [0, 1], transition: { duration: 1} }} element="span" className="relative md:text-6xl text-4xl font-black w-fit ">
          <span className="opacity-0">{TEXT}</span>
          <div className="absolute bg-primary h-1/2 inset-x-0 -translate-y-full" />
          <span className="w-full left-0 bottom-0 absolute">{TEXT}</span>
        </Animate>
        <Animate animate={{ x: [-100, 0], opacity: [0, 1], transition: { duration: 1} }} element="div"  className="md:text-xl text-sm mt-2 text-gray-1">
          I am a professional full-stack web developer, I specialize in
          creating all kind of websites: from simple and modern to complex and
          optimized websites. I have more than 6 years of exprience
        </Animate>
      </div>
    </Section>
  );
}
