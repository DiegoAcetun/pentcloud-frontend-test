// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  // console.log(req.method);
  switch (req.method) {
    case "GET": {
      console.log("GET");
      return res.status(200).json({ name: "John Doe" });
    }case "POST": {
      console.log("POST");
      console.log("req.body", req.body);
      return res.status(200).json({ name: "John Doe" });
    }
  }
}
