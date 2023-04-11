function superbowlWin (record) {
   let winner = record.find(season => season.result === 'W')
    return winner ? winner.year : undefined
}