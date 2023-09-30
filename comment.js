const sequelize = require("../Config/SequeLizedb");
const { DataTypes, where } = require("sequelize");
const Messages = require("../Helpers/messages");
const Utils = require("../Helpers/utils");
const Lead = require("./LeadsModel");
const Account = require("./AccountModel");
const Contact = require("./ContactModel");
const Opportunity = require("./OpportunityModel");

const Comment = sequelize.define(
  "Comment",
  {
    commentId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    content: {
      type: DataTypes.TEXT,
    },

    // For Which Module Comment Is Associated With And Its Id
    // Ex Associated with Lead and LeadId is 1 then
    // associatedId = 1 & associatedType= Lead

    // LeadId | ContactId | Account Id
    associatedId: {
      type: DataTypes.INTEGER,
    },
    // For Which Module Comment Is Associated With
    // Lead | Contact | Account
    associatedType: {
      type: DataTypes.STRING,
    },

    //For Storing Comment Created Or Person Info
    // Taken from JWT Token
    createdBy: {
      type: DataTypes.STRING,
    },
    createdType: {
      type: DataTypes.STRING,
    },
    createdById: {
      type: DataTypes.INTEGER,
    },

    // Status For Soft Delete
    accountStatus: {
      type: DataTypes.TINYINT,
      defaultValue: 1,
    },

    // Organisation Name
    // For Diffrentiating The Data Organisation Wise
    orgId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    orgName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },

  {
    createdAt: true,
    updatedAt: true,
    timestamps: true,
  }
);

Comment.getCommentById = async (id, req) => {
  try {
    let filterObj = { commentId: id };
    filterObj = await Utils.getFilterObj(req, filterObj);
    let comment = await Comment.findOne({
      where: filterObj,
    });
    return comment;
  } catch (error) {
    Utils.logError(error);
    throw new Error(Messages.Unable_To_Get_User_By_Id);
  }
};

// For Finding The All Comments WHich are Associated with the particular module and its user
// For Example Lead Model And Lead data with the id as 1 (id=1,type="Lead")
Comment.getAllCommentsByIdAndType = async (id, type, req) => {
  try {
    console.log(type);
    let comments = [];
    switch (type) {
      case "Call":
        console.log(type);
        comments = await getCallsComments(id, req);
        break;
      case "Lead":
        console.log(type);
        comments = await getLeadsComments(id, req);
        break;
      case "Contact":
        console.log(type);
        comments = await getContactComments(id, req);
        break;
      case "Account":
        console.log(type);
        comments = await getAccountComments(id, req);
        break;
      case "Opportunity":
        console.log(type);
        comments = await getOpportunityComments(id, req);
        break;
      default:
        break;
    }
    return comments;
  } catch (error) {
    Utils.logError(error);
    throw new Error(Messages.Unable_To_Get_User);
  }
};

async function getOpportunityComments(id, req) {
  let filterObj = { associatedId: id, associatedType: "Opportunity" };
  filterObj = await Utils.getFilterObj(req, filterObj);

  let response = [];
  let opportunityComments = await Comment.findAll({
    where: filterObj,
    order: [["commentId", "DESC"]],
  });

  let opportunity = await Opportunity.findOne({
    attributes: ["associatedId"],
    where: {
      opportunityId: id,
    },
  });

  if (opportunity && opportunity.associatedId) {
    filterObj.associatedId = opportunity.associatedId;
    filterObj.associatedType = "Lead";
    let leadsComments = await Comment.findAll({
      where: filterObj,
      order: [["commentId", "DESC"]],
    });
    response = response.concat(leadsComments);
    let lead = await Lead.findOne({
      attributes: ["callId"],
      where: {
        leadId: opportunity.associatedId,
      },
    });
    if (lead && lead.callId) {
      filterObj.associatedId = lead.callId;
      filterObj.associatedType = "Call";
      let callComments = await Comment.findAll({
        where: filterObj,
        order: [["commentId", "DESC"]],
      });
      response = response.concat(callComments);
    }
  }

  response = response.concat(opportunityComments);
  console.log(response);
  return response;
}

async function getContactComments(id, req) {
  let filterObj = { associatedId: id, associatedType: "Contact" };
  filterObj = await Utils.getFilterObj(req, filterObj);

  let response = [];
  let contactComments = await Comment.findAll({
    where: filterObj,
    order: [["commentId", "DESC"]],
  });

  let contact = await Contact.findOne({
    attributes: ["leadId", "callId"],
    where: {
      contactId: id,
    },
  });

  if (contact && contact.leadId) {
    filterObj.associatedId = contact.leadId;
    filterObj.associatedType = "Lead";
    let leadComments = await Comment.findAll({
      where: filterObj,
      order: [["commentId", "DESC"]],
    });
    response = response.concat(leadComments);
    if (contact.callId) {
      filterObj.associatedId = contact.callId;
      filterObj.associatedType = "Call";
      let callComments = await Comment.findAll({
        where: filterObj,
        order: [["commentId", "DESC"]],
      });
      response = response.concat(callComments);
    }
  }

  response = response.concat(contactComments);
  console.log(response);
  return response;
}

async function getAccountComments(id, req) {
  let filterObj = { associatedId: id, associatedType: "Account" };
  filterObj = await Utils.getFilterObj(req, filterObj);

  let response = [];
  let accountComments = await Comment.findAll({
    where: filterObj,
    order: [["commentId", "DESC"]],
  });

  let account = await Account.findOne({
    attributes: ["leadId", "callId"],
    where: {
      accountId: id,
    },
  });

  if (account && account.leadId) {
    filterObj.associatedId = account.leadId;
    filterObj.associatedType = "Lead";
    let leadComments = await Comment.findAll({
      where: filterObj,
      order: [["commentId", "DESC"]],
    });
    response = response.concat(leadComments);
    if (account.callId) {
      filterObj.associatedId = account.callId;
      filterObj.associatedType = "Call";
      let callComments = await Comment.findAll({
        where: filterObj,
        order: [["commentId", "DESC"]],
      });
      response = response.concat(callComments);
    }
  }

  response = response.concat(accountComments);
  console.log(response);
  return response;
}

async function getCallsComments(id, req) {
  let filterObj = { associatedId: id, associatedType: "Call" };
  filterObj = await Utils.getFilterObj(req, filterObj);
  let comments = await Comment.findAll({
    where: filterObj,
    order: [["commentId", "DESC"]],
  });
  return comments;
}

// Finding Comments Of Leads And Calls For Lead Module
async function getLeadsComments(id, req) {
  console.log(id, "lead");
  let filterObj = { associatedId: id, associatedType: "Lead" };
  filterObj = await Utils.getFilterObj(req, filterObj);

  let response = [];
  let leadsComments = await Comment.findAll({
    where: filterObj,
    order: [["commentId", "DESC"]],
  });


  let lead = await Lead.findOne({
    attributes: ["callId"],
    where: {
      leadId: id,
    },
  });

  console.log(lead);

  if (lead.callId) {
    filterObj.associatedId = lead.callId;
    filterObj.associatedType = "Call";
    let callComments = await Comment.findAll({
      where: filterObj,
      order: [["commentId", "DESC"]],
    });
    if (callComments && callComments.length > 0) {
      response = response.concat(callComments);
    }
    console.log(response);
  }

  response = response.concat(leadsComments);
  console.log(response);
  return response;
}

// For Finding The Last Comments WHich are Associated with the particular module and its user
// For Example Lead Model And Lead data with the id as 1 (id=1,type=:"Lead")

Comment.getLastCommentByIdAndType = async (id, type, req) => {
  try {
    let filterObj = { associatedId: id, associatedType: type };
    filterObj = await Utils.getFilterObj(req, filterObj);
    let comment = await Comment.findOne({
      where: filterObj,
      order: [["commentId", "DESC"]],
    });
    return comment;
  } catch (error) {
    Utils.logError(error);
    throw new Error(Messages.Unable_To_Get_User_By_Id);
  }
};

Comment.saveComment = async (commentData, req) => {
  try {
    commentData = await Utils.assignOrgInfo(commentData, req);
    commentData.createdType = req.login.role;
    commentData.createdById = req.login.id;
    let commentSaveData = await Comment.create(commentData);
    return commentSaveData;
  } catch (error) {
    Utils.logError(error);
    throw new Error(Messages.Unable_To_Save_User);
  }
};

Comment.updateCommentById = async (id, commentData, req) => {
  try {
    let filterObj = { commentId: id };
    filterObj = await Utils.getFilterObj(req, filterObj);
    let comment = await Comment.findOne({
      where: filterObj,
    });
    if (comment) {
      Object.assign(comment, commentData);
      await comment.save();
      return comment;
    } else {
      throw new Error(Messages.User_Not_Available);
    }
  } catch (error) {
    Utils.logError(error);
    throw new Error(Messages.Unable_To_Update_User);
  }
};

// For Updating The Last Comments WHich are Associated with the particular module and its user
// For Example Lead Model And Lead data with the id as 1 (id=1,type=:"Lead")

Comment.updateLastCommentByIdAndType = async (id, type, commentData, req) => {
  try {
    let filterObj = { associatedId: id, associatedType: type };
    filterObj = await Utils.getFilterObj(req, filterObj);
    let comment = await Comment.findOne({
      where: filterObj,
      order: [["commentId", "DESC"]],
    });
    if (comment) {
      Object.assign(comment, commentData);
      await comment.save();
      return comment;
    } else {
      throw new Error(Messages.User_Not_Available);
    }
  } catch (error) {
    Utils.logError(error);
    throw new Error(Messages.Unable_To_Update_User);
  }
};

Comment.deleteById = async (id, req) => {
  try {
    let filterObj = { commentId: id };
    filterObj = await Utils.getFilterObj(req, filterObj);
    let comment = await Comment.findOne({
      where: filterObj,
    });
    if (comment) {
      comment.accountStatus = 0;
      await comment.save();
      return true;
    } else {
      throw new Error(Messages.User_Not_Available);
    }
  } catch (error) {
    Utils.logError(error);
    throw new Error(Messages.Unable_To_Delete_User);
  }
};

// For Deleting The Last Comments WHich are Associated with the particular module and its user
// For Example Lead Model And Lead data with the id as 1 (id=1,type=:"Lead")

Comment.deleteLastByIdAndType = async (id, type, req) => {
  try {
    let filterObj = { associatedId: id, associatedType: type };
    filterObj = await Utils.getFilterObj(req, filterObj);
    let comment = await Comment.findOne({
      where: filterObj,
      order: [["commentId", "DESC"]],
    });
    if (comment) {
      comment.accountStatus = 0;
      await comment.save();
      return true;
    } else {
      throw new Error(Messages.User_Not_Available);
    }
  } catch (error) {
    Utils.logError(error);
    throw new Error(Messages.Unable_To_Delete_User);
  }
};

Comment.existCommentByIdAndType = async (id, type, req) => {
  try {
    let filterObj = { associatedId: id, associatedType: type };
    filterObj = await Utils.getFilterObj(req, filterObj);
    let count = await Comment.count({
      where: filterObj,
    });
    if (count > 0) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    Utils.logError(error);
    throw new Error(Messages.Unable_To_Get_User);
  }
};

Comment.existComment = async (id, req) => {
  try {
    let filterObj = { commentId: id };
    filterObj = await Utils.getFilterObj(req, filterObj);
    let count = await Comment.count({
      where: filterObj,
    });
    if (count > 0) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    Utils.logError(error);
    throw new Error(Messages.Unable_To_Get_User);
  }
};

Comment.sync({});

module.exports = Comment;
