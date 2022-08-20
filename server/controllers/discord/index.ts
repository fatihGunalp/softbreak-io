import dotenv from "dotenv";
import { Request, Response } from 'express';
import url from "url";
import axios from "axios";
dotenv.config();
let accessToken = "";
const { DISCORD_CLIENT_ID, DISCORD_CLIENT_SECRET, DISCORD_REDIRECT_URL } =
  process.env;

export async function discordRedirectController(req: Request,
  res: Response) {
  console.log(req.query);
  const { code } = req.query;
  if(code){
    try {
      const formData = new url.URLSearchParams({
        client_id: `${DISCORD_CLIENT_ID}`,
        client_secret: `${DISCORD_CLIENT_SECRET}`,
        grant_type: "authorization_code",
        code: code.toString(),
        redirect_uri: `${DISCORD_REDIRECT_URL}`,
      });
      const response = await axios.post(
        "https://discord.com/api/v8/oauth2/token",
        formData.toString(),
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
  
      const access_token = response.data.access_token;
      accessToken = access_token;
  
      res.json(200);
    } catch (err) {
      console.log(err);
      res.sendStatus(400);
    }
  }
  
}

export async function discordProfileController(req: Request,
  res: Response) {
  try {
    const userResponse = await axios("https://discord.com/api/v8/users/@me", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    res.json(userResponse.data);
  } catch (err) {
    console.log(err);
    res.sendStatus(400);
  }
}

export async function discordAuthRevoke(req: Request,
  res: Response) {
  try {
    const formData = new url.URLSearchParams({
      client_id: `${DISCORD_CLIENT_ID}`,
      client_secret: `${DISCORD_CLIENT_SECRET}`,
      token: `${accessToken}`,
    });
    const response = await axios.post(
      "https://discord.com/api/v8/oauth2/token/revoke",
      formData.toString(),
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
    res.json(response.data);
  } catch (error) {
    console.log(error);
    res.sendStatus(400);
  }
}
