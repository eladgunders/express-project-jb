const { connectedKnex } = require('./sql-connector');
const { logger } = require('./logger')


function getAllReports() {
    logger.debug('a user selected * from "reports" table')
    return connectedKnex('reports').select('*');
}

function getReportById(id) {
    logger.debug(`a user selected where id = ${id} from "reports" table`)
    return connectedKnex('reports').select('*').where('id', id).first();
}

function addReport(report) {
    logger.info(`a user inserted a new report - ${report}`)
    return connectedKnex("reports").insert(report);
}

function updateReport(report, id) {
    logger.info(`a user updated the report with the id ${id} to this - ${report}`)
    return connectedKnex("reports").where('id', id).update(report);
}

function deleteReport(id) {
    logger.info(`a user deleted the report with the id ${id}`)
    return connectedKnex("reports").where('id', id).del()
}

function getReportsByCondition(column, value){
    return connectedKnex('reports').select('*').where(column, value); 
}

module.exports = {
    getAllReports,
    getReportById,
    addReport,
    updateReport,
    deleteReport, 
    getReportsByCondition
}