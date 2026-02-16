import { Controller, Get, Param } from '@nestjs/common';
import { ApiOperation, ApiParam, ApiResponse } from '@nestjs/swagger';

@Controller()
export class AppController {

  @Get('api/sequence/:number')
  @ApiOperation({
    summary: 'Retrieve a fibonacci sequence',
    description: 'Pass a number in parameter and retrieve its fibonacci sequence of the iteration'
  })
  @ApiParam({
    name: 'number',
    description: 'Number of iteration'
  })
  @ApiResponse({
    status: 200,
    description: 'The fibonacci sequence',
    type: Array<number>,
    example: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144]
  })
  getSequence(@Param('number') number: number): number[] {

    if (number <= 0) return [];
    if (number === 1) return [0];

    const sequence = [0, 1];

    for (let i = 2; i < number; i++) {
      sequence.push(sequence[i - 1] + sequence[i - 2]);
    }

    return sequence;
  }
}
