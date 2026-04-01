const { App } = require("@slack/bolt");

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  socketMode: true,
  appToken: process.env.SLACK_APP_TOKEN,
});

// Hardcoded odpowiedzi Grubego Lidera

app.command("/roadmap", async ({ ack, respond }) => {
  await ack();
  await respond(
    "Roadmapa na Q2 jest jasna: skupiamy się na *nowych projektach* i *AI*. " +
    "Tak samo jak w Q1. I Q4 poprzedniego roku. Nie zmienia to faktu, że jest aktualna i ambitna. " +
    "Szczegóły wkrótce na spotkaniu, które zaplanujemy w przyszłym tygodniu. 📊"
  );
});

app.command("/budzet", async ({ ack, respond }) => {
  await ack();
  await respond(
    "Budżet jest *pod kontrolą*. Czekamy na akceptację — będzie w tym tygodniu + 1. " +
    "Rozmawiałem z biznesem, są bardzo pozytywnie nastawieni. " +
    "Na razie działamy w trybie oszczędnościowym, ale to tylko formalność. " +
    "Daj mi znać czego potrzebujesz, znajdziemy rozwiązanie. 💰"
  );
});

app.command("/podwyzka", async ({ ack, respond }) => {
  await ack();
  await respond(
    "Świetnie, że o tym mówisz — doceniam Twoją odwagę. " +
    "Temat podwyżek wróci w *następnym cyklu budżetowania*, który startuje... niedługo. " +
    "Twoja praca jest zauważana, uwierz mi. " +
    "Wróćmy do tego rozmową 1:1, którą umówimy jak tylko skończy się ten projekt. 📅"
  );
});

app.command("/znajdz_projekt", async ({ ack, respond }) => {
  await ack();
  await respond(
    "Coś się dzieje! Mam kilka bardzo obiecujących rozmów z potencjalnymi klientami. " +
    "Daj mi *tydzień*, dosłownie tydzień, i będę miał dla Ciebie coś konkretnego. " +
    "Na pewno będzie to projekt mobilny. Prawdopodobnie React Native. " +
    "Może iOS. Zobaczymy. 🔍"
  );
});

// Odpowiedź na wzmianki (@Gruby Lider)
app.event("app_mention", async ({ event, say }) => {
  await say(
    `Cześć <@${event.user}>! Gruby Lider tu. ` +
    "Jestem teraz w trybie *deep work*, ale odezwę się jak tylko skończę tę prezentację strategiczną. " +
    "W międzyczasie skorzystaj z `/roadmap`, `/budzet`, `/podwyzka` lub `/znajdz_projekt`. " +
    "Wszystko jest pod kontrolą. 👋"
  );
});

(async () => {
  await app.start();
  console.log("Gruby Lider jest online. Piątki wolne.");
})();
