const Team = require("../Model/teamModel");

exports.createTeam = async (req, res) => {
  const { teamName, members, teamID } = req.body;

  try {
    if (
      !members ||
      !teamName ||
      !Array.isArray(members) ||
      members.length === 0
    ) {
      return res.status(400).json({
        status: "Fail",
        message: "Please select team members to add",
      });
    }

    let updatedTeam;

    if (teamID) {
      updatedTeam = await Team.findByIdAndUpdate(
        teamID,
        { $push: { teamMembers: { $each: members } } },
        { new: true }
      );
      if (!updatedTeam) {
        return res.status(404).json({
          status: "Fail",
          message: "Team not found",
        });
      }
    } else {
      const newTeam = await Team.create({
        teamName: teamName,
        teamMembers: members,
      });
      updatedTeam = await Team.findById(newTeam._id);

      if (!updatedTeam) {
        return res.status(500).json({
          status: "error",
          message: "Error fetching the created team",
        });
      }
    }
    res.status(200).json({
      status: "success",
      data: updatedTeam,
    });
  } catch (error) {
    console.error("Error updating team members:", error);

    res.status(500).json({
      status: "error",
      message: "Internal server error",
      error: error.message,
    });
  }
};

exports.findAllTeam = async (req, res) => {
  try {
    const teams = await Team.find();

    if (!teams || teams.length === 0) {
      return res.status(200).json({
        status: "success",
        message: "There are no teams",
      });
    }

    res.status(200).json({
      status: "success",
      data: teams,
    });
  } catch (error) {
    console.error("Error finding teams:", error);

    res.status(500).json({
      status: "error",
      message: "Internal server error",
      error: error.message,
    });
  }
};
