import React from "react";

import getCurrentUser from "@/actions/getCurrentUser";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import getUsers from "@/actions/getUsers";

const Hero = async () => {
  const currentUser = await getCurrentUser();
  return <div>Hero {currentUser?.email}</div>;
};

export default Hero;
