import { Router } from "express";
import {
  discordRedirectController,
  discordProfileController,
  discordAuthRevoke,
} from "../../controllers/discord";

const router = Router();
router.get("/redirect", discordRedirectController);
router.get("/user", discordProfileController);
router.get("/revoke", discordAuthRevoke);

export default router;
