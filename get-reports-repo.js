const reports_repo = require('./reports-repo')
const reports_repo_test = require('./mockery/reports-repo-mock.js')


function get_reports_repo(mode) {
    if (mode === 'test') {
        return reports_repo_test;
    }
    return reports_repo;
}

module.exports.get_reports_repo = get_reports_repo