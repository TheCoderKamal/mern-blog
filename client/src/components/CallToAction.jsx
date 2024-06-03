import { Button } from 'flowbite-react';

export default function CallToAction() {
  return (
    <div className="flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center">
      <div className="flex-1 justify-center flex flex-col">
        <h2 className="text-2xl">Do you want more Templets?</h2>
        <p className="text-gray-500 my-2">
          Checkout this websites for responsive Projects
        </p>
        <Button
          gradientDuoTone="purpleToPink"
          className="rounded-tl-xl rounded-bl-none"
        >
          <a
            href="https://kamal-exnihilo.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Giant [Ex-Nihilo]
          </a>
        </Button>
      </div>
      <div className="h-[35%] w-[50%] p-7 flex-1">
        <img
          className="w-full h-full"
          src="https://themeforest.img.customer.envatousercontent.com/files/228206958/Theme-Preview.__large_preview.jpg?auto=compress%2Cformat&q=80&fit=crop&crop=top&max-h=8000&max-w=590&s=76950b6dc2037c598256badc39b28552"
        />
      </div>
    </div>
  );
}